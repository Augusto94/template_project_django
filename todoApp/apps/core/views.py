from django.contrib.auth import logout as log_out
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.views.generic.base import TemplateView, View


class DashboardView(LoginRequiredMixin, TemplateView):

    template_name = 'index.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        context['message'] = 'Hello World'
        return context


class LogoutView(LoginRequiredMixin, View):

    def get(self, request):
        log_out(request)

        return redirect('login')
