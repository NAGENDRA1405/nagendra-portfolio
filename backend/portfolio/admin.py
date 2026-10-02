from django.contrib import admin
from .models import Education, Certificate, Experience, Project


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("degree", "institution", "period", "score")
    search_fields = ("degree", "institution", "field")


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ("title", "issuer", "date")
    search_fields = ("title", "issuer")


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("role", "company", "period")
    search_fields = ("role", "company")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "technologies")
    search_fields = ("title", "technologies")