
from django.contrib import admin
from django.urls import path, include
# from login_api.api import UserAPI
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('profiles_api.urls'))
    # path('api/create_user/', UserAPI.as_view(), name = "Create user api"),
]
