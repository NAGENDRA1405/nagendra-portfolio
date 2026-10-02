from django.urls import path
from .views import (
    EducationListView,
    CertificateListView,
    ExperienceListView,
    ProjectListView,
)

urlpatterns = [
    path("education/", EducationListView.as_view(), name="education"),
    path("certificates/", CertificateListView.as_view(), name="certificates"),
    path("experience/", ExperienceListView.as_view(), name="experience"),
    path("projects/", ProjectListView.as_view(), name="projects"),
]