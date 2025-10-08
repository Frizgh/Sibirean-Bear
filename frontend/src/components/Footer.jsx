import React from "react";
import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--bear-dark))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-[hsl(var(--bear-teal-light))]" />
              <span className="text-2xl font-bold font-['Playfair_Display']">
                Сибирский Медведь
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Крафтовый кофе с диким духом. Варим совершенство с 2024 года.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--bear-teal-light))] transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--bear-teal-light))] transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--bear-teal-light))] transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-['Playfair_Display']">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Меню
                </a>
              </li>
              <li>
                <a href="#rewards" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Программа лояльности
                </a>
              </li>
              <li>
                <a href="#locations" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Локации
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  О нас
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-['Playfair_Display']">Поддержка клиентов</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Подарочные карты
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-['Playfair_Display']">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[hsl(var(--bear-teal-light))] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">info@siberianbear.coffee</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[hsl(var(--bear-teal-light))] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[hsl(var(--bear-teal-light))] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">ул. Кофейная, 123, Москва</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Сибирский Медведь. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                Условия использования
              </a>
              <a href="#" className="text-white/60 hover:text-[hsl(var(--bear-teal-light))] transition-colors duration-200">
                Политика cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;