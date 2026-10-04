from rest_framework import serializers
from .models import Education, Certificate, Experience, Project


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class CertificateSerializer(serializers.ModelSerializer):
    certificate = serializers.SerializerMethodField()

    class Meta:
        model = Certificate
        fields = "__all__"

    def get_certificate(self, obj):
        if not obj.certificate:
            return None

        filename = obj.certificate.name.split("/")[-1]

        return (
            "https://wcvynswnyuktfobyffxq.supabase.co/"
            "storage/v1/object/public/certificates/"
            f"{filename}"
        )

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"