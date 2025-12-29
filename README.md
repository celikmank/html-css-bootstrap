# html-css-bootstrap

Bu depo, farklı küçük HTML/CSS/JS projelerini klasör klasör bir araya getirmek için temiz bir başlangıç olarak düzenlendi.

## Yapı

- `car-dashboard-app/` — Araç gösterge paneli arayüzü (statik)
- `quiz-app/` — Basit quiz uygulaması (statik)
- `index.html` — Kökten projelere yönlendiren basit bir liste sayfası

## Nasıl çalıştırılır?

- Her klasör içindeki `index.html` dosyasını çift tıklayarak tarayıcıda açabilirsiniz.
- VS Code kullanıyorsanız "Live Server" eklentisiyle kök `index.html` dosyasını çalıştırabilirsiniz.

## Commit geçmişi

Bu depo yeni bir geçmişle temiz şekilde başlatılacaktır. Mevcut GitHub reposunun geçmişini bu yapı ile değiştirmek isterseniz aşağıdaki adımları uygulayın.

## Git ile temiz başlangıç (örn. `main` dalı)

```bash
# 1) Yeni depo klasörüne girin
cd html-css-bootstrap

# 2) Git başlatın ve ana dalı ayarlayın
git init
git add .
git commit -m "chore: clean initial structure with projects"
git branch -M main

# 3) Uzak depo ekleyin (kendi repo URL'inizi girin)
# Örnek: https://github.com/celikmank/html-css-bootstrap
git remote add origin <SIZIN-REPO-URLINIZ>

# 4) Uzak geçmişi tamamen değiştirerek gönderin (dikkat!)
git push -u --force origin main
```

> Not: `--force` uzak depodaki geçmişi değiştirir. Kullanmadan önce emin olun.
