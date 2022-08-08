import React from "react";
import './sass/App.scss'

const App = () => {
    return (
        <div>
            {/*<header>*/}
            {/*    <a href="/" className={'main_logo'}>*/}
            {/*        <div>*/}
            {/*            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                <path*/}
            {/*                    d="M29.1225 28.7965C31.0502 26.5288 30.7745 23.1278 28.5069 21.2001C26.2392 19.2724 22.8382 19.548 20.9105 21.8157C18.9828 24.0834 19.2584 27.4844 21.526 29.4121C23.7937 31.3398 27.1948 31.0642 29.1225 28.7965Z"*/}
            {/*                    fill="#1D1D1D"/>*/}
            {/*                <path*/}
            {/*                    d="M25.7818 4.00347C26.4853 4.60109 27.0236 5.36941 27.3449 6.23479C27.6663 7.10016 27.7599 8.03356 27.6169 8.94552C27.474 9.85749 27.0991 10.7174 26.5283 11.4429C25.9576 12.1684 25.21 12.7351 24.3573 13.0888L24.2067 13.1488L21.532 14.2346C19.7177 14.9677 17.5282 15.3265 15.7448 17.4245C14.1907 19.2527 13.9527 22.0227 13.518 23.8659L12.8821 26.4967L12.8542 26.6206C12.6431 27.5199 12.2044 28.3499 11.5803 29.0309C10.9562 29.712 10.1676 30.2213 9.29005 30.51C8.41254 30.7986 7.47557 30.857 6.56901 30.6795C5.66245 30.502 4.8167 30.0946 4.11287 29.4962C3.40903 28.8979 2.87072 28.1288 2.54956 27.2627C2.22839 26.3965 2.13515 25.4624 2.27877 24.5498C2.42238 23.6373 2.79804 22.777 3.36972 22.0513C3.9414 21.3257 4.68992 20.7591 5.54351 20.4059L5.55624 20.3909L5.62989 20.365L5.98442 20.2386L8.60283 19.3188C10.279 18.7265 12.379 18.0261 14.0842 16.0202C14.7248 15.2667 15.8063 11.6648 16.1893 10.1687L17.0365 6.8729C17.2482 5.97463 17.6869 5.14577 18.3108 4.46572C18.9347 3.78567 19.7228 3.27723 20.5995 2.98911C21.4762 2.70099 22.4123 2.64285 23.3179 2.82026C24.2236 2.99767 25.0685 3.40468 25.7717 4.0023L25.7818 4.00347Z"*/}
            {/*                    fill="#1D1D1D"/>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*    </a>*/}
            {/*</header>*/}
            <section className={"s-section-first"}>
                <div className={"max_width section-vh"}>
                    {/*<div className={"s-back-style-first"} />*/}
                    <img className={"s-back-style-first"} alt={"test"} src={"./img/first-section-man.png"} />
                    <div className={"s-wrap-first"}>
                        <span className={"s-wrap-first-top-text"}>Бесплатно</span>
                        <h1 className={"s-wrap-first-main-text"}>
                            Не проводи
                            переговоров
                            о зарплате
                            с подчиненными
                            пока не узнаете это
                        </h1>
                        <span className={"s-wrap-first-bottom-text"}>
                            Мы описали по шагам простую и эффективную технологию
                            мотивации подчиненных, которую вы можете внедрить
                            уже сегодня, сразу после просмотра этого урока
                        </span>
                        <div className={"s-bottom-wrap"}>
                            <div className={"s-bottom-wrap-button"}>
                                <span className={"s-bottom-wrap-button-text"}>
                                    Получить доступ
                                </span>
                            </div>
                            <span className={"s-bottom-wrap-secondary"}>
                                Получите доступ к уроку, примеру внедрения
                                и 2 PDF с полностью описанной технологией
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"s-section-second"}>
                <div className={"max_width section-vh-end"}>
	                <img alt={"test"} className={"s-back-style-second"} src={"./img/second-section-man.png"} />
					<div className={"s-wrap-second"}>
						<h1 className={"s-wrap-second-main-text"}>
							Почему мы выбрали эту технологию?
						</h1>
						<span className={"s-wrap-second-under-main-text"}>
							Эта система мотивации персонала принесла
							компании Amazon —
						</span>
						<span className={"s-wrap-second-middle-text"}>
							$21,3 млрд
							чистой прибыли
							в 2020 году
						</span>
						<ul type="disc" className={"s-wrap-second-list"}>
							<li>В компании «Амазон» работает 1,3 миллиона человек;</li>
							<li>На маркетплейсе Amazon размещено более 1,9 млн компаний малого и среднего бизнеса;</li>
							<li>Чистая прибыль Amazon за 2020 год составила $21,3 млрд;</li>
							<li>Сотрудники Amazon заработали в 2020 году $80 млрд;</li>
							<li>Новая цель компании Amazon — Стать Лучшим работодателем на Земле.</li>
						</ul>
					</div>
                </div>
            </section>
	        <section className={"s-section-third"}>
				<div className={"max_width"}>
					<div className={"s-wrap-third"}>
						<h1 className={"s-wrap-third-main-text"}>
							Урок на 15 минут
							с простой и пошаговой
							инструкцией
						</h1>
						<div className={"s-wrap-third-p-wrap"}>
							<p className={"s-wrap-third-p"}>
								В уроке мы расскажем о том, в каких ситуациях
								эта система подходит, а в каких её ни в коем
								случае нельзя применять.
							</p>
							<p className={"s-wrap-third-p"}>
								Как правильно подготовиться самому и правильно
								настроить сотрудника на интервью.
							</p>
							<p className={"s-wrap-third-p"}>
								По каким шагам его проводить. И как в последующем
								это решение внедрить в работу.
							</p>
						</div>
						<div>
							<img alt={"test"} src={"./img/mac-book.png"}/>
						</div>
					</div>
				</div>
	        </section>
	        <section className={"s-section-fourth"}>
				<div className={"max_width"}>
					<img alt={"test"} className={"s-style-book"} src={"./img/open-book.png"} />
					<div className={"s-wrap-fourth"}>
						<h1 className={"s-wrap-fourth-main-text"}>
							Инструкция
							для проведения
							интервью
						</h1>
						<p className={"s-wrap-fourth-p"}>
							Мы переписали все важные аспекты
							и процедуры подготовки, проведения интервью
							и внедрения в жизнь в виде PDF-книги, с инструкциями,
							иллюстрациями и примерами, чтобы вы могли
							распечатать её и держать под рукой.
						</p>
						<p className={"s-wrap-fourth-p"}>
							Вам не придется много раз пересматривать
							урок, ведь распечатанная инструкция всегда
							будет под рукой.
						</p>
					</div>
				</div>
	        </section>
	        <section className={"s-section-fifth"}>
		        <div className={"max_width"}>
			        <img alt={"test"} className={"s-style-list"} src={"./img/list.png"} />
			        <div className={"s-wrap-fifth"}>
				        <h1 className={"s-wrap-fifth-main-text"}>
					        Пошаговый
					        чек-лист
				        </h1>
				        <p className={"s-wrap-fifth-p"}>
					        Мы сделали отдельный чек-лист с формами
					        и чек-боксами. Его удобно будет распечатать
					        под каждого сотрудника и внедрять решение
					        внося прогресс в чек-лист.
				        </p>
				        <p className={"s-wrap-fifth-p"}>
					        Так ни один из этапов не потеряется
					        и у вас всё получится внедрить правильно.
				        </p>
				        <p className={"s-wrap-fifth-p"}>
					        По итогам внедрения все эти листы можно будет
					        подшить в папку и сохранить в личном архиве.
				        </p>
			        </div>
		        </div>
	        </section>
			<section className={"s-section-sixth"}>
				<div className={"max_width"}>
					<div className={"s-wrap-sixth"}>
						<h1 className={"s-wrap-sixth-main-text"}>
							Тренируйте
							все необходимые
							навыки
						</h1>
						<p className={"s-wrap-sixth-p"}>
							Один раз в месяц мы проводим игры
							с собственниками и управленцами для решения
							переговорных кейсов и сложных ситуаций
							с подчиненными.
						</p>
						<p className={"s-wrap-sixth-p"}>
							На таких встречах вы сможете «обкатать»
							технологию проведения интервью в безопасных
							условиях ни чем не рискуя, получить
							рекомендации и обратную связь и уже после
							этого проводить переговоры с подчиненными.
						</p>
					</div>
				</div>
			</section>
        </div>
    );
}

export default App;
