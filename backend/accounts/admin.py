from django.contrib import admin
from .models import CustomUser
from django.utils.translation import gettext_lazy as _
# Register your models here.

class CustomUserAdmin(admin.ModelAdmin):

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
    )

    list_display = ('username', 'email', 'is_staff')
    search_fields = ('username', 'email')
    ordering = ('username',)

admin.site.register(CustomUser,CustomUserAdmin)
