export default function MainPage() {
    return (
        <main id="main">

            {/* <!-- ======= About Section ======= --> */}
            <section id="about" className="about">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-6 col-lg-7" data-aos="fade-right">
                            <img src="assets/img/julia1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
                            <h3 data-aos="fade-up">Equilibrando Forma e Função:
                            </h3>
                            <p data-aos="fade-up">
                                Bem-vindo ao nosso escritório, aqui priorizamos espaços funcionais e esteticamente cativantes. Buscamos criar interiores que contem histórias, refletindo a personalidade e necessidades dos clientes. Cada projeto começa com uma compreensão profunda das aspirações do cliente. Valorizamos o equilíbrio entre forma e função, escolhendo cada elemento com propósito. Nosso compromisso com a inovação sustentável é fundamental. A colaboração estreita e transparência são essenciais para resultados excepcionais
                            </p>
                            <div className="icon-box" data-aos="fade-up">
                                <i className="bi bi-house-door-fill"></i>
                                <h4>Arquitetura de interiores</h4>
                                <p>Nosso escritório é especializado em arquitetura de interiores.</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Atendimento presencial </h4>
                                <p> Realizamos atendimento presencial em Belo Horizonte, Itaúna e em toda região.</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-globe-americas"></i>
                                <h4>Atendimento Virtual</h4>
                                <p>Realizamos atendimento virtual em todo o Brasil.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section -->
    <!-- ======= Services Section ======= -->
     */}
            <section id="services" className="services section-bg">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Serviços Oferecidos: </h2>
                        {/* <!--<p>Aqui está demonstração dos serviços ofereçidos pelo escritório</p>--> */}
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
                            <div className="icon-box icon-box-pink">
                                <div className="icon"><i className="bi bi-house-heart"></i></div>
                                <h4 className="title"><a href="#contact">Projeto Residencial de Interiores</a></h4>
                                <p className="description">Criação de ambientes acolhedores e funcionais para residências.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box icon-box-cyan">
                                <div className="icon"><i className="bi bi-building"></i></div>
                                <h4 className="title"><a href="#contact">Design de Espaços Comerciais</a></h4>
                                <p className="description">
                                    Ambientes atraentes e funcionais para estabelecimentos comerciais.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box icon-box-green">
                                <div className="icon"><i className="bi bi-clipboard-data"></i></div>
                                <h4 className="title"><a href="#contact">Planejamento de Ambientes Corporativo</a></h4>
                                <p className="description">
                                    Escritórios eficientes e inspiradores para ambientes de trabalho.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box icon-box-blue">
                                <div className="icon"><i className="bi bi-lightbulb"></i></div>
                                <h4 className="title"><a href="#contact">Consultoria em Design de Interiores</a></h4>
                                <p className="description">
                                    Orientações especializadas em design.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Services Section --> */}

            {/* <!-- ======= Portfolio Section ======= --> */}
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Portfolio:</h2>
                        <p>Conheça um pouco do nosso trabalho.</p>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">Todos</li>
                                <li data-filter=".filter-res">Residenciais</li>
                                <li data-filter=".filter-comerc">Comerciais</li>
                                <li data-filter=".filter-corp">Corporativos</li>

                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-res">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/bebe-5.jpeg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Quarto</h4>
                                    <p>Quarto de Bebê</p>
                                    <div className="portfolio-links">
                                        {/* <!--
                                        <a href="assets/img/portfolio/bebe-5.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Quarto Bebê"><i className="bi bi-image-alt"></i></a>
                  --> */}
                                        <a href="./portfolio-pages/quartobebe.html" title="Saiba mais"><i className="bi bi-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-res">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/ap-santaefigenia-quarto.jpeg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Apartamento Santa Efigenia</h4>
                                        <p>Quarto casal</p>
                                        <div className="portfolio-links">
                                            {/* <!--
                                            <a href="assets/img/portfolio/ap-santaefigenia-quarto.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Quarto Casal"><i className="bi bi-image-alt"></i></a>

                  --> */}
                                            <a href="./portfolio-pages/apsantaefigenia.html" title="Saiba mais"><i className="bi bi-plus"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-comerc">
                            <div className="portfolio-wrap">
                                <img src="./assets/img/portfolio/armazem-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Armázem 85</h4>
                                        <p>Mercado de produtos</p>
                                        <div className="portfolio-links">
                                            {/* <!--
                                            <a href="./assets/img/portfolio/armazem-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Armazem 85"><i className="bi bi-image-alt"></i></a>

                  --> */}
                                            <a href="./portfolio-pages/armazem85.html" title=" Saiba mais"><i className="bi bi-plus"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-corp">
                            <div className="portfolio-wrap">
                                <img src="./assets/img/portfolio/psq (1).jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Consultório Funcionários</h4>
                                        <p>Consultório de Psquiatria</p>
                                        <div className="portfolio-links">
                                            {/* <!--
                                            <a href="./assets/img/portfolio/psq (1).jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Consultório"><i className="bi bi-image-alt"></i></a>

                  --> */}
                                            <a href="./portfolio-pages/consult1.html" title=" Saiba mais"><i className="bi bi-plus"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-corp">
                            <div className="portfolio-wrap">
                                <img src="./assets/img/portfolio/psq-1 (8).jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Consultório Vila da Serra</h4>
                                        <p>Consultório de Psquiatria</p>
                                        <div className="portfolio-links">
                                            {/* <!--
                                            <a href="./assets/img/portfolio/psq-1 (8).jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Consultório"><i className="bi bi-image-alt"></i></a>

                  --> */}
                                            <a href="./portfolio-pages/consult2.html" title=" Saiba mais"><i className="bi bi-plus"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-res">
                            <div className="portfolio-wrap">
                                <img src="./assets/img/portfolio/ap itauna (15).jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Residência Itaúna</h4>
                                        <p>Apartamento estilo boho - Sala de TV </p>
                                        <div className="portfolio-links">
                                            {/* <!--
                                            <a href="./assets/img/portfolio/ap itauna (15).jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Sala de TV "><i className="bi bi-image-alt"></i></a>

                  --> */}
                                            <a href="../portfolio-pages/apitauna.html" title=" Saiba mais"><i className="bi bi-plus"></i></a>
                                        </div>
                                    </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section>
            {/* <!-- End Portfolio Section -->

    <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title" data-aos="fade-up">
                        <h2>Contato:</h2>
                        <p>Entre em contato e descubra como podemos transformar seus espaços em lugares de inspiração e conforto, onde cada detalhe é um reflexo autêntico de quem você é. Juntos, vamos criar ambientes que transcendem o ordinário e se tornam verdadeiramente extraordinários.
                        </p>
                    </div>

                    <div className="row no-gutters justify-content-center" data-aos="fade-up">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                {/* <!-- comentar endereço uma vez que não temos-->
                                <!--
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Localização:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div> --> */}

                                <div className="phone mt-4">
                                    <a href="https://www.instagram.com/julialima.arquitetura/"><i className="bi bi-instagram"></i></a>
                                    <h4>Instagram</h4>
                                    <a className="link-body-emphasis" href="https://www.instagram.com/julialima.arquitetura/"><p>Conheça mais sobre o meu trabalho e se preferir entre em contato por lá.</p></a>

                                </div>

                                <div className="phone mt-4">
                                    <a href="https://wa.me/5537999399921/?text=Estou%20interessado%20%20em projeto%20de%20arquitetura"><i className="bi bi-whatsapp"></i></a>
                                    <h4>Whats App</h4>
                                    <a className="link-body-emphasis" href="https://wa.me/5537999399921/?text=Olá,%Estou%20interessado%20%20em%um%projeto%20de%20arquitetura."><p>Voce também pode nos contactar através do WathsApp.</p></a>

                                </div>

                                <div className="phone mt-4">
                                    <i className="bi bi-phone"></i>
                                    <h4>Telefone:</h4>
                                    <p>+37 9 9939 9921</p>
                                </div>

                                <div className="email mt-4">
                                    <a href="mailto:arquitetura.julialima@gmail.com"><i className="bi bi-envelope"></i></a>
                                    <h4>Email:</h4>
                                    <a href="mailto:arquitetura.julialima@gmail.com"><p>arquitetura.julialima@gmail.com</p></a>
                                </div>

                            </div>

                        </div>
                        {/* <!-- mapa do google oculto por ora-->
          <!-- */}

                        {/* <div className="col-lg-5 d-flex align-items-stretch">
                            <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                        </div>
          --> */}

                    </div>

                </div>
            </section>
            {/* <!-- End Contact Section --> */}

        </main >

    )
}