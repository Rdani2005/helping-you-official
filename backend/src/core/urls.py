# -------------- Libraries -------------------------------
from django.contrib import admin
from django.urls import path, include
# urls
urlpatterns = [
    path('admin/', admin.site.urls),
    # API for user blog
    path('api/blog/', include('blog.urls')),
]
