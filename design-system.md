# Design System - DevinPay

Este documento serve como guia de referência visual e de componentes (Design System) para a interface do produto **DevinPay**. Os padrões aqui extraídos da landing page devem ser utilizados para manter a consistência visual no desenvolvimento do sistema/dashboard.

---

## 1. Tipografia

- **Família de Fonte:** `Poppins`, sans-serif (via Google Fonts).
- **Pesos (Font Weights):**
  - **Light (300):** Textos secundários, descrições longas, legendas (`text-[#94A3B8]`).
  - **Medium (500):** Botões, links da navbar, rótulos (labels).
  - **Semibold (600):** Títulos principais (H1, H2, H3) e valores numéricos em destaque.

## 2. Paleta de Cores

A interface utiliza o modo escuro (Dark Mode) como padrão nativo.

### Cores de Marca / Primárias (Azul)
- **Primary Base:** `#2563EB` (Usado em botões principais, ícones de destaque, barra de rolagem e glow effects).
- **Primary Hover:** `#1D4ED8` (Estado de hover de botões primários).
- **Primary Light:** `#60A5FA` (Destaques em textos e ícones menores).
- **Selection (Texto selecionado):** Fundo `#2563EB` com texto `#FFFFFF`.

### Cores de Fundo (Backgrounds & Surfaces)
- **Background Principal (Body):** `#000000` (Preto puro).
- **Surfaces / Cards / Navbar:** `#0A0A0A` (Quase preto, cria sutil elevação).
- **Superfícies de Destaque / Mockup:** `#1E293B` (Usado em bordas do mockup do celular e barras).

### Cores de Texto
- **Texto Primário (Títulos):** `#FFFFFF` (Branco puro).
- **Texto Secundário (Parágrafos e Labels):** `#94A3B8` (Slate 400).
- **Texto Terciário / Desabilitado:** `#FFFFFF` com 80% de opacidade (`white/80`).

### Cores de Bordas (Borders)
- **Borda Padrão (Cards / Separadores):** Branco com 5% de opacidade (`white/5` ou `rgba(255,255,255,0.05)`).
- **Borda em Hover / Destaque:** Branco com 10% de opacidade (`white/10` ou `rgba(255,255,255,0.1)`).

### Cores de Status
- **Success / Online:** Verde `#22C55E` (`green-500` - Usado no status de privacidade no footer).

---

## 3. Elementos de Interface e Formas

### Raios de Borda (Border Radius)
- **`rounded-md` (Pequeno):** Usado em Botões gerais e na Navbar.
- **`rounded-lg` (Médio):** Usado nos Cards de "Benefícios" e imagens do Dashboard.
- **`rounded-xl` (Grande):** Usado em envoltórios de ícones (ícones com fundo) e pequenos itens de lista/cards internos do mockup.
- **`rounded-2xl` a `rounded-3xl` (Extra Grande):** Usado em blocos maiores de destaque, como o CTA principal e blocos internos do celular.
- **`rounded-full` (Circular):** Badges ("Payments driven by AI"), ícones de perfis genéricos e glows.

### Botões
1. **Botão Primário:**
   - Fundo: `#2563EB`
   - Texto: `#FFFFFF` (Medium)
   - Hover: Fundo `#1D4ED8`
   - Formato: `rounded-md`, Paddings variando entre `px-5 py-2.5` (pequeno) e `px-8 py-3` (normal).

2. **Botão Secundário (Outline):**
   - Fundo: Transparente
   - Borda: `border border-white/10`
   - Texto: `#FFFFFF` (Medium)
   - Hover: Fundo `white/5`
   - Formato: `rounded-md`, `px-8 py-3`.

---

## 4. Iconografia

- **Biblioteca:** **Lucide Icons**
- **Estilo:** Linhas (Stroke).
- **Tamanhos Padrões:**
  - Pequeno: `w-4 h-4` (badges e itens de lista).
  - Médio: `w-6 h-6` (destaques de cards de benefícios e navbar).
  - Grande: `w-10 h-10` (ícone principal no topo de seções/CTA).

---

## 5. Efeitos Visuais (Effects)

### Blurs e Vidro (Glassmorphism)
- **Navbar / Badges:** Utiliza fundos semitransparentes com `backdrop-blur-md` e `backdrop-blur-sm` para criar efeito de vidro polido.
- **Glows de Fundo:** Círculos div com cores da marca (`#2563EB` com 10% a 15% de opacidade) e `blur-3xl` pesados para simular iluminação.

### Sombras e Gradientes
- **Sombras:** `shadow-lg` e `shadow-2xl` usadas majoritariamente nas imagens de mockups e elementos flutuantes pesados para dar profundidade no fundo preto.
- **Gradientes:** `radial-gradient` usados no fundo geral (no topo da página) e na seção final de CTA para guiar o olhar do usuário sutilmente para o centro.