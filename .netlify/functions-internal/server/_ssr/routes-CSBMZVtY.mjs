import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as ArrowRight, D as CircleQuestionMark, E as House, O as BadgeCheck, S as Building2, T as Layers, _ as ChevronRight, a as TrendingUp, b as Car, c as Phone, d as Maximize2, f as MapPin, g as Clock, h as GraduationCap, i as Trophy, l as MessageCircle, m as Instagram, n as Wallet, o as Target, p as Mail, r as Users, s as ShieldCheck, t as X, u as Menu, v as ChevronLeft, w as Sparkles, x as Calendar, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CSBMZVtY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Nav() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mx-auto max-w-7xl px-4 py-3 sm:px-6 transition-all duration-300 ${scrolled ? "mt-2" : "mt-4"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4 rounded-full glass-premium px-6 py-2.5 shadow-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex min-w-0 items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white group-hover:scale-105 transition-transform duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate text-sm font-semibold tracking-tight text-[var(--ink)]",
							children: ["Reinaldo × ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "Ademicon"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-8 text-sm font-medium text-[var(--ink-soft)] md:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#beneficios",
								className: "transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]",
								children: "Benefícios"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#como-funciona",
								className: "transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]",
								children: "Como funciona"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#atleta",
								className: "transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]",
								children: "Parceria"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#galeria",
								className: "transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]",
								children: "O atleta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								className: "transition-all hover:text-[var(--primary)] hover:translate-y-[-1px]",
								children: "FAQ"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#cta",
							className: "btn-primary text-xs sm:text-sm !py-2.5 !px-5 hidden sm:inline-flex shadow-sm",
							children: ["Simular agora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsOpen(!isOpen),
							className: "grid h-9 w-9 place-items-center rounded-full border border-black/5 text-[var(--ink)] hover:bg-black/5 md:hidden",
							"aria-label": "Toggle menu",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})]
					})
				]
			})
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-4 top-20 w-64 rounded-3xl border border-black/5 bg-[var(--card)] p-6 shadow-2xl animate-fade-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-5 text-base font-semibold text-[var(--ink-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#beneficios",
							onClick: () => setIsOpen(false),
							className: "pb-2 border-b border-black/5 hover:text-[var(--primary)]",
							children: "Benefícios"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#como-funciona",
							onClick: () => setIsOpen(false),
							className: "pb-2 border-b border-black/5 hover:text-[var(--primary)]",
							children: "Como funciona"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#atleta",
							onClick: () => setIsOpen(false),
							className: "pb-2 border-b border-black/5 hover:text-[var(--primary)]",
							children: "Parceria"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#galeria",
							onClick: () => setIsOpen(false),
							className: "pb-2 border-b border-black/5 hover:text-[var(--primary)]",
							children: "O atleta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							onClick: () => setIsOpen(false),
							className: "pb-2 border-b border-black/5 hover:text-[var(--primary)]",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cta",
							onClick: () => setIsOpen(false),
							className: "btn-primary text-sm mt-2 w-full text-center",
							children: "Falar com Especialista"
						})
					]
				})
			})
		})]
	});
}
var Reinaldo_embaixador_default = "/assets/Reinaldo%20embaixador-DlhBO40f.jpg";
function Hero() {
	const [modalidade, setModalidade] = (0, import_react.useState)("imovel");
	const [credito, setCredito] = (0, import_react.useState)(3e5);
	const [prazo, setPrazo] = (0, import_react.useState)(180);
	const [tipoParcela, setTipoParcela] = (0, import_react.useState)("integral");
	const taxaAdm = modalidade === "imovel" ? .17 : .18;
	const taxaReserva = modalidade === "imovel" ? .015 : .02;
	const fundoComumMensal = credito / prazo;
	const taxaAdmMensal = credito * taxaAdm / prazo;
	const fundoReservaMensal = credito * taxaReserva / prazo;
	const consorcioParcelaIntegral = fundoComumMensal + taxaAdmMensal + fundoReservaMensal;
	const consorcioParcelaReduzida = fundoComumMensal * .5 + taxaAdmMensal + fundoReservaMensal;
	const consorcioParcelaPosContemplacao = fundoComumMensal * 1.5 + taxaAdmMensal + fundoReservaMensal;
	const consorcioParcela = tipoParcela === "integral" ? consorcioParcelaIntegral : consorcioParcelaReduzida;
	const consorcioTotal = credito * (1 + taxaAdm + taxaReserva);
	const taxaMensal = Math.pow(1 + (modalidade === "imovel" ? .11 : .26), 1 / 12) - 1;
	const financiamentoParcela = credito * (taxaMensal * Math.pow(1 + taxaMensal, prazo) / (Math.pow(1 + taxaMensal, prazo) - 1));
	const financiamentoTotal = financiamentoParcela * prazo;
	const economiaTotal = financiamentoTotal - consorcioTotal;
	const formatCurrency = (val) => new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
		maximumFractionDigits: 0
	}).format(val);
	const handleModalidadeChange = (type) => {
		setModalidade(type);
		setTipoParcela("integral");
		if (type === "imovel") {
			setCredito(3e5);
			setPrazo(180);
		} else {
			setCredito(8e4);
			setPrazo(60);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate min-h-screen overflow-hidden pt-32 pb-20 sm:pt-36 bg-[var(--background)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,oklch(0.96_0.01_30)_0%,transparent_60%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-10%] top-[10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.22_25/0.55),transparent_60%)] animate-glow-pulse" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[10%] bottom-[15%] h-[28vh] w-[28vh] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.85_0.12_85/0.35),transparent_60%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "absolute inset-0 h-full w-full opacity-[0.08]",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
						id: "hero-grid",
						width: "56",
						height: "56",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M56 0H0V56",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "0.6"
						})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#hero-grid)",
						className: "text-[var(--ink)]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 800 800",
					className: "absolute -left-40 top-1/3 h-[80vh] w-[80vh] opacity-20 animate-float-slow pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "400",
						cy: "400",
						r: "380",
						fill: "none",
						stroke: "oklch(0.40 0.17 25)",
						strokeWidth: "1.5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "400",
						cy: "400",
						r: "240",
						fill: "none",
						stroke: "oklch(0.40 0.17 25)",
						strokeWidth: "1"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-semibold text-[var(--ink-soft)] backdrop-blur shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--primary)]" }), "Reinaldo da Silva · Embaixador, apoiador e investidor Ademicon"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-balance text-4xl font-extrabold leading-[1.05] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-7xl",
						children: [
							"Planeje hoje. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "Conquiste"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative inline-block",
								children: ["amanhã.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "absolute -bottom-2 left-0 h-2.5 w-full",
									viewBox: "0 0 100 10",
									preserveAspectRatio: "none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M0 8 Q 50 1 100 8",
										stroke: "var(--primary)",
										strokeWidth: "2.5",
										fill: "none"
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg",
						children: [
							"O consórcio inteligente para quem quer construir patrimônio de verdade, comprar bens ou renovar a frota",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-[var(--ink)]",
								children: "sem pagar juros abusivos."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-xl text-sm text-[var(--muted-foreground)]",
						children: [
							"Com a chancela de ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-[var(--ink)]",
								children: "Reinaldo da Silva"
							}),
							", embaixador, apoiador e investidor da ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-[var(--ink)]",
								children: "Ademicon"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[var(--muted-foreground)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[var(--primary)]" }), " Banco Central · Regulado"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-[var(--primary)]" }), " +30 anos no mercado"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-[var(--primary)]" }), " Milhares de contemplados"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-xl backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-black/5 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold uppercase tracking-wider text-[var(--ink)]",
									children: "Simulador Rápido de Parcelas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleModalidadeChange("imovel"),
										className: `flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${modalidade === "imovel" ? "bg-[var(--primary)] text-white shadow-md" : "bg-black/5 text-[var(--ink-soft)] hover:bg-black/10"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), " Imóvel"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => handleModalidadeChange("auto"),
										className: `flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${modalidade === "auto" ? "bg-[var(--primary)] text-white shadow-md" : "bg-black/5 text-[var(--ink-soft)] hover:bg-black/10"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-3.5 w-3.5" }), " Automóvel"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[var(--ink-soft)]",
												children: "Crédito Desejado"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-[var(--primary)]",
												children: formatCurrency(credito)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: modalidade === "imovel" ? 1e5 : 3e4,
											max: modalidade === "imovel" ? 15e5 : 3e5,
											step: modalidade === "imovel" ? 1e4 : 5e3,
											value: credito,
											onChange: (e) => setCredito(Number(e.target.value)),
											className: "custom-slider mt-2 h-1.5 w-full cursor-pointer rounded-lg bg-black/10 accent-[var(--primary)]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[10px] text-[var(--muted-foreground)] mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatCurrency(modalidade === "imovel" ? 1e5 : 3e4) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatCurrency(modalidade === "imovel" ? 15e5 : 3e5) })]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[var(--ink-soft)]",
												children: "Prazo"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-[var(--primary)]",
												children: [
													prazo,
													" meses (",
													(prazo / 12).toFixed(0),
													" anos)"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: modalidade === "imovel" ? 60 : 24,
											max: modalidade === "imovel" ? 240 : 100,
											step: 12,
											value: prazo,
											onChange: (e) => setPrazo(Number(e.target.value)),
											className: "custom-slider mt-2 h-1.5 w-full cursor-pointer rounded-lg bg-black/10 accent-[var(--primary)]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-[10px] text-[var(--muted-foreground)] mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: modalidade === "imovel" ? "5 anos" : "2 anos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: modalidade === "imovel" ? "20 anos" : "~8 anos" })]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-semibold text-[var(--ink-soft)] flex items-center gap-1.5",
											children: ["Opção de Parcela", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "group relative cursor-help flex items-center justify-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5 text-black/35 hover:text-black/55 transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-xl bg-[var(--ink)] p-3 text-[11px] font-normal leading-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-xl backdrop-blur-sm",
													children: ["No **Plano 50** você paga meia parcela do fundo comum + taxas integralmente até a contemplação. Após ser contemplado, o saldo restante é diluído nas parcelas seguintes.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-[var(--ink)] rotate-45" })]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-[var(--primary)] font-bold",
											children: tipoParcela === "reduzida" && "✓ Plano 50 Ativo"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-1.5 bg-black/5 p-1 rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTipoParcela("integral"),
											className: `rounded-lg py-1.5 text-xs font-bold transition-all ${tipoParcela === "integral" ? "bg-white text-[var(--ink)] shadow-sm" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"}`,
											children: "Integral (100%)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTipoParcela("reduzida"),
											className: `rounded-lg py-1.5 text-xs font-bold transition-all ${tipoParcela === "reduzida" ? "bg-white text-[var(--primary)] shadow-sm" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"}`,
											children: "Reduzida (Plano 50)"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-[var(--primary)]/5 p-4 border border-[var(--primary)]/15 flex flex-col justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mb-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-[var(--muted-foreground)]",
														children: "Consórcio Ademicon"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold uppercase tracking-wide text-[var(--primary)] bg-[var(--primary)]/10 rounded-full px-2 py-0.5",
														children: tipoParcela === "reduzida" ? "Plano 50" : `Taxa ${((taxaAdm + taxaReserva) * 100).toFixed(1)}%`
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xl font-extrabold text-[var(--ink)] block mt-1",
													children: [formatCurrency(consorcioParcela), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-normal text-[var(--ink-soft)]",
														children: "/mês"
													})]
												}),
												tipoParcela === "reduzida" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] text-[var(--primary)] font-semibold block mt-0.5",
													children: "(Até a contemplação)"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] text-[var(--primary)] font-bold mt-1 block",
													children: ["✓ Sem Juros · Total: ", formatCurrency(consorcioTotal)]
												})
											] }), tipoParcela === "reduzida" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 border-t border-[var(--primary)]/10 pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-[10px] text-[var(--ink-soft)]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pós-Contemplação:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "group relative cursor-help flex items-center justify-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3 w-3 text-black/30 hover:text-black/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-52 -translate-x-1/2 rounded-lg bg-[var(--ink)] p-2.5 text-[9px] font-normal leading-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-xl",
															children: ["Simulação estimada pós-contemplação na metade do prazo, recalculando o saldo devedor do fundo comum.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-[var(--ink)] rotate-45" })]
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-extrabold text-[var(--ink)] text-xs block mt-0.5",
													children: [formatCurrency(consorcioParcelaPosContemplacao), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-normal text-[var(--ink-soft)]",
														children: "/mês"
													})]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-black/5 p-4 border border-black/5 relative overflow-hidden flex flex-col justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 h-12 w-12 bg-red-950/5 rounded-bl-full pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mb-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-[var(--muted-foreground)]",
														children: "Financiamento Banco"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold uppercase tracking-wide text-red-500 bg-red-500/10 rounded-full px-2 py-0.5",
														children: modalidade === "imovel" ? "11% a.a." : "26% a.a."
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xl font-extrabold text-[var(--ink-soft)]/50 block mt-1 line-through",
													children: [formatCurrency(financiamentoParcela), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-normal",
														children: "/mês"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] text-red-500 mt-1 block",
													children: ["✗ Com Juros · Total: ", formatCurrency(financiamentoTotal)]
												})
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/10 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-white",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-[var(--ink)] block",
												children: "Economia Total Estimada"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[var(--ink-soft)]",
												children: "vs. financiamento bancário"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-black text-[var(--primary)]",
											children: formatCurrency(economiaTotal)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#cta",
									className: "btn-primary !py-3.5 !text-sm w-full text-center flex-1 shadow-lg",
									children: ["Garantir este plano ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 inline ml-1" })]
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[500px] animate-fade-up [animation-delay:150ms] lg:max-w-none lg:pl-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 translate-y-6 rounded-[36px] bg-gradient-to-br from-[var(--primary)] to-white opacity-40 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Reinaldo_embaixador_default,
							alt: "Reinaldo da Silva, embaixador Ademicon",
							className: "h-[62vh] min-h-[460px] w-full object-cover object-top transition-transform duration-700 hover:scale-105",
							loading: "eager"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] backdrop-blur border border-black/5 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5 text-[var(--primary)]" }), " Embaixador Oficial"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 border border-black/5 shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--primary)] text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider",
										children: "Apoio & Parceria"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "truncate text-base font-bold text-[var(--ink)]",
										children: "Reinaldo da Silva × Ademicon"
									})]
								})]
							})
						})
					]
				})]
			})]
		})]
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 -mt-8 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 rounded-3xl border border-black/6 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-5",
				children: [
					{
						icon: BadgeCheck,
						label: "Especialistas em consórcio"
					},
					{
						icon: Users,
						label: "Atendimento personalizado"
					},
					{
						icon: Calendar,
						label: "Parcelas planejadas"
					},
					{
						icon: ShieldCheck,
						label: "Sem juros abusivos"
					},
					{
						icon: Layers,
						label: "Diversas modalidades"
					}
				].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-2xl border border-black/5 bg-[var(--secondary)] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:bg-white hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold leading-tight text-[var(--ink)]",
						children: label
					})]
				}, label))
			})
		})
	});
}
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "beneficios",
		className: "relative px-6 py-28 bg-[var(--background)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[10%] top-[30%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,30,30,0.06)_0%,transparent_60%)]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Vantagens do Consórcio"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-balance text-4xl font-extrabold text-[var(--ink)] sm:text-5xl",
						children: [
							"Por que planejar com ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--primary)]",
								children: "Consórcio"
							}),
							"?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-[var(--muted-foreground)]",
						children: "A estratégia mais inteligente para conquistar bens sem ficar preso às armadilhas dos juros altos."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Wallet,
						title: "Zero Juros Bancários",
						text: "Ao contrário dos financiamentos bancários convencionais, o consórcio não cobra juros. Você paga apenas uma taxa de administração competitiva e diluída."
					},
					{
						icon: Target,
						title: "Planejamento sob Medida",
						text: "Escolha prazos e parcelas de acordo com a sua capacidade financeira. Crie uma disciplina de investimento saudável e duradoura."
					},
					{
						icon: TrendingUp,
						title: "Poder de Compra à Vista",
						text: "Quando contemplado, você recebe a carta de crédito e realiza a compra como se estivesse pagando à vista, obtendo excelente margem de negociação."
					},
					{
						icon: Layers,
						title: "Total Flexibilidade",
						text: "Use seu crédito para comprar imóveis, veículos, frotas, reformar ou contratar serviços nacionais de forma rápida e segura."
					}
				].map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative overflow-hidden rounded-3xl border border-black/6 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2.5 hover:border-[var(--primary)]/20 hover:shadow-xl",
					style: { transitionDelay: `${i * 60}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--primary)]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--primary)]/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[oklch(0.30_0.15_25)] text-white shadow-md transition-transform duration-500 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]",
								children: text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] opacity-0 translate-x-[-5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
								children: ["Fale com um especialista ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})]
				}, title))
			})]
		})]
	});
}
function Modalities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 pb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: House,
						label: "Imobiliário",
						desc: "Compre casas, apartamentos, terrenos, construa ou reforme sem taxas abusivas."
					},
					{
						icon: Car,
						label: "Automóvel & Moto",
						desc: "Adquira seu veículo novo ou usado, ou planeje a renovação da frota da sua empresa."
					},
					{
						icon: Building2,
						label: "Comercial / Pesados",
						desc: "Investimento em caminhões, ônibus, máquinas agrícolas, galpões e bens corporativos."
					},
					{
						icon: GraduationCap,
						label: "Serviços Especiais",
						desc: "Crédito estruturado para viagens, festas, estudos, cirurgias ou consultorias."
					}
				].map(({ icon: Icon, label, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal group flex flex-col justify-between rounded-3xl border border-black/6 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/20 hover:shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--primary)]/15 bg-[var(--primary)]/8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-lg font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--primary)]",
							children: ["Consórcio de ", label]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-[var(--ink-soft)]",
							children: desc
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#cta",
						className: "mt-5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[var(--primary)] hover:underline",
						children: ["Ver parcelas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})]
				}, label))
			})
		})
	});
}
function HowItWorks() {
	const steps = [
		{
			icon: Target,
			title: "Defina seu Objetivo",
			text: "Escolha qual bem ou serviço você quer adquirir (uma casa, carro novo, frota de caminhões, maquinário ou serviço especializado)."
		},
		{
			icon: Wallet,
			title: "Selecione o Plano Ideal",
			text: "Simule e defina o valor da carta de crédito e a parcela mensal que encaixa com tranquilidade no orçamento mensal da sua família ou empresa."
		},
		{
			icon: Calendar,
			title: "Participe das Assembleias",
			text: "Mensalmente ocorrem sorteios. Você também pode acelerar sua conquista ofertando lances para resgatar o crédito antecipadamente."
		},
		{
			icon: Trophy,
			title: "Seja Contemplado",
			text: "Ao ser sorteado ou vencer um lance, você recebe a sua Carta de Crédito Ademicon para prosseguir com a compra desejada."
		},
		{
			icon: Sparkles,
			title: "Realize a sua Conquista",
			text: "Adquira o bem pagando à vista. O consórcio garante maior poder de negociação e economia, sem pagar juros para o banco."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "como-funciona",
		className: "relative overflow-hidden bg-[var(--secondary)]/40 px-6 py-28 border-y border-black/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[30%] top-[-10%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[var(--primary)]" }), " Passo a Passo da Conquista"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl",
							children: [
								"Como Funciona o ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "Consórcio"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-[var(--muted-foreground)]",
							children: "Cinco etapas simples que separam a sua disciplina da conquista do seu patrimônio."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mt-20 relative hidden lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-10 right-10 top-7 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid grid-cols-5 gap-6",
						children: steps.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "group relative text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border border-[var(--border)] bg-card text-[var(--primary)] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)]/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-block rounded-full bg-black/5 border border-black/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]",
									children: ["Etapa 0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3.5 text-lg font-bold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-[var(--muted-foreground)] px-2",
									children: text
								})
							]
						}, title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal mt-16 lg:hidden space-y-8 relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-black/5",
					children: steps.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex gap-6 pl-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-card text-[var(--primary)] shadow-md transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-bold uppercase tracking-widest text-[var(--primary)]",
								children: ["Passo 0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors mt-0.5",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]",
								children: text
							})
						] })]
					}, title))
				})
			]
		})]
	});
}
var Em_campo__um_lance_pode_virar_gol__No_consórcio__ele_também_pode_aproximar_você_da_conquista_Com_default = "/assets/Em%20campo_%20um%20lance%20pode%20virar%20gol.%20No%20cons%C3%B3rcio_%20ele%20tamb%C3%A9m%20pode%20aproximar%20voc%C3%AA%20da%20conquista.Com-Cwf1vEst.jpg";
function AthleteSection() {
	const imageRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (!imageRef.current) return;
			const rect = imageRef.current.getBoundingClientRect();
			const offset = Math.max(-50, Math.min(50, (window.innerHeight / 2 - rect.top - rect.height / 2) * .06));
			imageRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "atleta",
		className: "relative overflow-hidden bg-[var(--background)] px-6 py-28 border-b border-black/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-20 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.05)_0%,transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 bottom-0 h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.12_85/0.15)_0%,transparent_60%)]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[32px] border border-black/5 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: imageRef,
							src: Em_campo__um_lance_pode_virar_gol__No_consórcio__ele_também_pode_aproximar_você_da_conquista_Com_default,
							alt: "Reinaldo da Silva no estádio - Campanha Ademicon",
							className: "h-[65vh] min-h-[480px] w-full object-cover transition-transform duration-300 ease-out will-change-transform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-8 left-8 right-8 z-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-[var(--gold-soft)] bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur",
								children: "Campanha Oficial"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-black text-white mt-3 leading-tight",
								children: "No futebol ou na vida, o lance certo muda tudo."
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5 text-[var(--primary)]" }), " Parceria de Sucesso"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-balance text-4xl font-extrabold leading-[1.1] text-[var(--ink)] sm:text-5xl",
						children: [
							"Reinaldo investe, apoia e ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "acredita"
							}),
							" na Ademicon."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-base leading-relaxed text-[var(--ink-soft)]",
						children: [
							"Mais do que um embaixador, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[var(--ink)]",
								children: "Reinaldo da Silva"
							}),
							" é apoiador e investidor ativo da ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[var(--ink)]",
								children: "Ademicon"
							}),
							". Ele escolheu o consórcio inteligente como a ferramenta principal de seu planejamento de longo prazo — e compartilha esse exemplo com milhares de brasileiros."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]",
						children: "Foco, estratégia e constância: a mesma fórmula que constrói carreiras de prestígio dentro dos campos, aplicada diretamente à consolidação do seu patrimônio familiar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-3 gap-4",
						children: [
							{
								label: "Tradição",
								key: "+30",
								sub: "Anos de mercado"
							},
							{
								label: "Segurança",
								key: "100%",
								sub: "Regulado pelo Bacen"
							},
							{
								label: "Economia",
								key: "0%",
								sub: "Juros bancários"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-black/5 bg-white/80 p-4.5 shadow-sm transition-all duration-300 hover:border-[var(--primary)]/20 hover:-translate-y-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] block",
									children: s.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl font-black text-gradient-gold mt-1 block",
									children: s.key
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[11px] font-semibold text-[var(--ink-soft)] leading-tight block",
									children: s.sub
								})
							]
						}, s.label))
					})
				]
			})]
		})]
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--secondary)] via-[var(--background)] to-[var(--background)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.40_0.17_25/0.05)_0%,transparent_65%)]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal relative overflow-hidden rounded-[36px] border border-black/8 bg-white p-8 sm:p-14 shadow-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--primary)]/8 blur-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-[var(--gold)]/10 blur-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3.5 w-3.5" }), " Manifesto do Atleta"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-8 font-sans text-xl leading-relaxed text-[var(--ink)] sm:text-2xl sm:leading-[1.5]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold text-4xl font-serif inline-block mr-1",
								children: "\""
							}),
							"Em campo, um único lance estratégico pode decidir um campeonato inteiro. No planejamento de vida, a dinâmica é a mesma. O consórcio Ademicon oferece opções sob medida para você dar o lance certo em direção aos seus objetivos sem o desperdício dos juros. Afinal, a verdadeira conquista nasce da união entre estratégia e preparo.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold text-4xl font-serif inline-block ml-1",
								children: "\""
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] flex-1 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
								className: "not-italic text-sm font-extrabold text-[var(--ink)] block",
								children: "Reinaldo da Silva"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] block mt-0.5",
								children: "Investidor & Embaixador Ademicon"
							})]
						})]
					})
				]
			})
		})]
	});
}
var ______Rei_Leão____Reinaldo____mirassolfc_default = "/assets/%F0%9F%91%8D%F0%9F%8F%BD%F0%9F%91%8D%F0%9F%8F%BD%F0%9F%91%91%20Rei%20Le%C3%A3o!%20%F0%9F%A6%81%20Reinaldo%20%F0%9F%94%9B%20@mirassolfc-CyurFHdh.jpg";
var Jogamos_com_coragem__mostrando_a_nossa_força_no_Maião__Infelizmente_não_foi_o_resultado_que_quer_default = "/assets/Jogamos%20com%20coragem_%20mostrando%20a%20nossa%20for%C3%A7a%20no%20Mai%C3%A3o.%20Infelizmente%20n%C3%A3o%20foi%20o%20resultado%20que%20quer-DqdVPBhb.jpg";
var reinaldo_contrato_default = "/assets/reinaldo_contrato-DdQn3gNp.png";
var ademicon_default = "/assets/ademicon-C2yySboS.svg";
function Gallery() {
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(null);
	const images = [
		{
			src: Reinaldo_embaixador_default,
			tag: "Embaixador & Investidor Oficial",
			title: "Reinaldo da Silva",
			accent: true
		},
		{
			src: reinaldo_contrato_default,
			tag: "Assinatura do Contrato Ademicon",
			title: "Parceria Oficial",
			accent: true
		},
		{
			src: ______Rei_Leão____Reinaldo____mirassolfc_default,
			tag: "Rei Leão no Mirassol FC",
			title: "Foco no Campeonato"
		},
		{
			src: Jogamos_com_coragem__mostrando_a_nossa_força_no_Maião__Infelizmente_não_foi_o_resultado_que_quer_default,
			tag: "Força no Maião",
			title: "Determinação em Campo"
		}
	];
	(0, import_react.useEffect)(() => {
		if (activeIdx === null) return;
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setActiveIdx(null);
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIdx]);
	const handlePrev = () => {
		setActiveIdx((prev) => prev === null ? null : (prev - 1 + images.length) % images.length);
	};
	const handleNext = () => {
		setActiveIdx((prev) => prev === null ? null : (prev + 1) % images.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "galeria",
		className: "relative px-6 py-28 border-t border-black/5 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--secondary)] to-[var(--background)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.40_0.17_25/0.05),transparent_70%)]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--primary)]" }), "Galeria do Atleta"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl",
							children: ["Destaques do ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "Reinaldo"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]",
						children: [
							"Confira a trajetória do embaixador e sua parceria com a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ademicon_default,
								alt: "Ademicon",
								className: "inline h-4 align-middle opacity-80"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: images.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => setActiveIdx(i),
						className: "group relative cursor-pointer overflow-hidden rounded-[24px] border border-black/8 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[3/4] overflow-hidden rounded-[18px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.src,
									alt: item.tag,
									className: "h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/95 p-3 text-[var(--primary)] shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-all duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-5 w-5" })
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3.5 px-2 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]",
									children: item.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold text-[var(--ink)] mt-0.5",
									children: item.title
								})]
							}),
							item.accent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-[var(--primary)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-md",
								children: ["★ ", item.tag.includes("Contrato") ? "Contrato" : "Destaque"]
							})
						]
					}, i))
				})]
			}),
			activeIdx !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveIdx(null),
						className: "absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all",
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handlePrev,
						className: "absolute left-6 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all hidden md:block",
						"aria-label": "Anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleNext,
						className: "absolute right-6 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all hidden md:block",
						"aria-label": "Próximo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex max-h-[80vh] max-w-[90vw] flex-col items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[activeIdx].src,
							alt: images[activeIdx].tag,
							className: "max-h-[75vh] max-w-[85vw] object-contain rounded-xl shadow-2xl transition-all duration-300"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-[var(--gold)]",
								children: images[activeIdx].tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-lg font-bold mt-1",
								children: images[activeIdx].title
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-6 flex gap-2 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handlePrev,
							className: "rounded-full bg-white/10 px-4 py-2 text-sm text-white",
							children: "Anterior"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleNext,
							className: "rounded-full bg-white/10 px-4 py-2 text-sm text-white",
							children: "Próximo"
						})]
					})
				]
			})
		]
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cta",
		className: "relative overflow-hidden px-6 py-24 bg-[var(--background)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-10%] top-[-20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[-10%] bottom-[-20%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.1)_0%,transparent_60%)]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[oklch(0.32_0.16_25)] via-[var(--primary)] to-[oklch(0.22_0.10_25)] px-8 py-16 text-center border border-white/10 shadow-2xl sm:px-16 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-30 pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute -left-20 -top-20 h-96 w-96 text-white",
						viewBox: "0 0 200 200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "100",
								cy: "100",
								r: "90",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "0.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "100",
								cy: "100",
								r: "60",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "0.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "100",
								cy: "100",
								r: "30",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "0.5"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--gold)]/30 blur-3xl" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-soft)] backdrop-blur",
							children: "Próximo Passo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl",
							children: [
								"Está pronto para realizar seu ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "próximo sonho"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base text-white/80 max-w-xl mx-auto",
							children: "Fale agora com um consultor da Ademicon e descubra o plano ideal para você."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/5500000000000",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-gold w-full sm:w-auto text-center shadow-lg",
								children: ["Quero meu consórcio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 inline ml-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+5500000000000",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 font-semibold text-white transition hover:bg-white/10 w-full sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mr-1" }), " Ligar Agora"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[var(--gold)]" }), " Atendimento Humano"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[var(--gold)]" }), " Retorno em menos de 24h"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-[var(--gold)]" }), " Sem taxa de adesão"]
								})
							]
						})
					]
				})]
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "relative px-6 py-28 border-t border-black/5 bg-[var(--background)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-10%] top-[40%] h-[35vh] w-[35vh] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_25/0.05)_0%,transparent_60%)]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Dúvidas Frequentes"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl",
						children: ["Perguntas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Frequentes"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-[var(--muted-foreground)]",
						children: "Tire suas dúvidas rápidas sobre o consórcio e faça seu planejamento com total transparência."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal mt-16 rounded-3xl border border-[var(--border)] bg-card p-4 sm:p-6 shadow-elegant",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					defaultValue: "item-0",
					className: "w-full",
					children: [
						{
							q: "O que é um consórcio e como funciona?",
							a: "O consórcio é uma modalidade de compra compartilhada e planejada. Um grupo de pessoas com o mesmo objetivo financeiro contribui com parcelas mensais. A cada mês, participantes são contemplados por sorteio ou através de lances (antecipação de parcelas), tendo acesso ao valor total contratado (carta de crédito)."
						},
						{
							q: "Realmente não tem juros bancários?",
							a: "Não existe cobrança de taxa de juros. Em vez disso, há apenas uma taxa de administração, que remunera a Ademicon pela gestão do grupo. Essa taxa é fixa, muito inferior aos juros cobrados em financiamentos convencionais e é diluída linearmente ao longo de todo o plano."
						},
						{
							q: "Como funcionam os lances?",
							a: "Além do sorteio mensal, você pode acelerar a sua contemplação ofertando um lance, que funciona como a antecipação de parcelas. Existem modalidades de lance embutido (onde você usa parte da própria carta de crédito para pagar o lance), lance fixo e lance livre. O maior lance do mês é contemplado."
						},
						{
							q: "Posso utilizar o FGTS no consórcio imobiliário?",
							a: "Sim, você pode utilizar o saldo do seu FGTS para ofertar um lance no consórcio de imóvel, complementar o valor do crédito no momento da compra do bem, amortizar o saldo devedor ou reduzir as parcelas mensais, de acordo com as regras estabelecidas pela Caixa Econômica Federal."
						},
						{
							q: "Qual a segurança de contratar um consórcio Ademicon?",
							a: "A Ademicon possui mais de 30 anos de atuação sólida e é totalmente regulada e fiscalizada pelo Banco Central do Brasil. Os valores arrecadados ficam em conta de reserva blindada sob supervisão rigorosa, garantindo que o seu investimento esteja 100% protegido."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						className: "border-b border-black/5 last:border-b-0 py-2.5 transition-colors duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-base sm:text-lg font-bold text-[var(--ink)] hover:text-[var(--primary)] hover:no-underline px-4 focus:outline-none",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-sm leading-relaxed text-[var(--muted-foreground)] px-4 pt-1 pb-4",
							children: f.a
						})]
					}, i))
				})
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-black px-6 pb-12 pt-24 text-white border-t border-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[5%] top-[10%] h-[30vh] w-[30vh] rounded-full bg-[radial-gradient(circle,rgba(180,30,30,0.05)_0%,transparent_60%)]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ademicon_default,
									alt: "Ademicon",
									className: "h-9 brightness-0 invert"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm leading-relaxed text-white/60",
								children: "Consórcio inteligente regulado pelo Banco Central. Construa seu patrimônio e realize conquistas sem juros, com o endosso de Reinaldo da Silva — embaixador, apoiador e investidor Ademicon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3",
								children: [
									{
										icon: Instagram,
										href: "#",
										label: "Instagram"
									},
									{
										icon: MessageCircle,
										href: "https://wa.me/5500000000000",
										label: "WhatsApp"
									},
									{
										icon: Mail,
										href: "mailto:contato@ademicon.com.br",
										label: "Email"
									}
								].map(({ icon: Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									"aria-label": label,
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold-soft)] hover:bg-white/5 hover:scale-105",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-sm font-bold uppercase tracking-widest text-[var(--gold-soft)] flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Fale Conosco"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0800 000 0000" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/5500000000000",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-white transition-colors",
									children: "WhatsApp 24h (Simulador)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:contato@ademicon.com.br",
									className: "hover:text-white transition-colors",
									children: "contato@ademicon.com.br"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atendimento em todo o Brasil" })]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold uppercase tracking-widest text-[var(--gold-soft)]",
						children: "Navegação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3.5 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#beneficios",
								className: "hover:text-white hover:underline transition-all",
								children: "Benefícios"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#como-funciona",
								className: "hover:text-white hover:underline transition-all",
								children: "Como Funciona"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#atleta",
								className: "hover:text-white hover:underline transition-all",
								children: "O Atleta"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								className: "hover:text-white hover:underline transition-all",
								children: "Perguntas Frequentes"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold uppercase tracking-widest text-[var(--gold-soft)]",
						children: "Modalidades"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3.5 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "hover:text-white transition-colors",
								children: "Consórcio Imobiliário"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "hover:text-white transition-colors",
								children: "Consórcio de Automóveis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "hover:text-white transition-colors",
								children: "Consórcio de Veículos Pesados"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "hover:text-white transition-colors",
								children: "Consórcio de Serviços"
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-[11px] text-white/40 leading-relaxed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Ademicon Administradora de Consórcios. Todos os direitos reservados."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md sm:text-right",
						children: "Ademicon é regulada e fiscalizada pelo Banco Central do Brasil. O consórcio é regulamentado pela Lei nº 11.795/08."
					})]
				})
			})
		]
	});
}
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal, .reveal-group");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) e.target.classList.add("in");
			});
		}, {
			threshold: .06,
			rootMargin: "0px 0px -40px 0px"
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function LandingPage() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-clip bg-background text-foreground selection:bg-[var(--gold)] selection:text-[var(--background)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modalities, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AthleteSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { LandingPage as component };
