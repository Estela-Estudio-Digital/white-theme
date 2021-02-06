<?php bk_footer_before();?>
</main>
<footer class="container-fluid py-5 bg-brand-primary-color  mt-5 shadow">
  <div class="container text-white">
    <div class="row">
      <div class="col-12">Footer</div>
    </div>
    <hr>
    <p class="text-center text-sm-left m-0">&copy; <?php echo date('Y'); ?> <a class="text-white"
        href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?></a></p>
  </div>

  <div class="modal fade" id="kit-form-modal" tabindex="-1" role="dialog" aria-labelledby="kit-modalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-uppercase pl-5"><b>Contáctanos</b></h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row align-items-stretch">
              <div class="col-md-6 d-flex align-items-center">

                <div class="wpcf7" role="form" id="wpcf7-f18-o1" lang="es-ES" dir="ltr">
                  <form method="post" name="formulario_inicial" id="formulario_inicial"
                    class="wpcf7-form init formulario_cotizar formulario-general" novalidate="novalidate">
                    <div style="display: none;">
                      <input type="hidden" name="_wpcf7" value="18">
                      <?php 
                              $plugin_data = get_plugin_data( ABSPATH . 'wp-content/plugins/contact-form-7/wp-contact-form-7.php' );
                              echo '<input type="hidden" name="_wpcf7_version" value="'.$plugin_data['Version'].'">';
                            ?>
                      <input type="hidden" name="_wpcf7_locale" value="es_ES">
                      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f18-o1">
                      <input type="hidden" name="_wpcf7_container_post" value="0">
                      <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                    </div>

                    <div class="form-row text-left">
                      <div class="form-group w-100 px-4 mb-2">
                        <span class="bk-projectcart--text__span"></span>
                        <label class="label" for="inputName">Nombre y apellido</label>
                        <input type="text" class="form-control" id="inputName" name="inputName" required>
                      </div>
                      <div class="form-group w-100 px-4 mb-2">
                        <label class="label" for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" name="inputEmail" required>
                      </div>
                      <div class="form-group w-100 px-4 mb-2">
                        <label class="label" for="inputTelefono">Teléfono</label>
                        <input type="text" class="form-control" id="inputTelefono" name="inputTelefono" required>
                      </div>
                      <div class="form-group w-100 px-4 mb-2">
                        <label class="label" for="texAreaMensaje">Describe brevemente Tú proyecto</label>
                        <input class="form-control" id="texAreaMensaje" name="texAreaMensaje"></input>
                      </div>
                      <div class="form-group w-100">
                        <div class="text-center py-4 mb-2">
                          <button type="submit" name="boton_enviar" value="enviar"
                            class="g-recaptcha btn btn-primary px-5 al-btn al-btn--white " id="boton_enviar"
                            data-badge="inline" disabled>
                            Enviar
                          </button><br>
                          <span class="ajax-loader"></span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-md-6 d-flex align-items-center">
                <ul class="pl-lg-5">
                  <li>
                    <p><a href="tel:+56920871868"><i class="fas fa-mobile-alt"></i> +56 9 2087 1868</a></p>
                  </li>
                  <li>
                    <p><a href="mailto:contacto@estelaestudio.com"><i class="far fa-envelope"></i>
                        contacto@estelaestudio.com</a></p>
                  </li>
                  <li>
                    <h3>
                      <a href="https://www.instagram.com/estelaestudio/" target="_blank">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/Estela-Estudio-Digital-270227023118642" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                      <a href="https://www.behance.net/raskatafat" class="text-white" target="_blank">
                        <i class="fab fa-behance"></i>
                      </a>

                    </h3>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>
<?php bk_footer_after();?>

<?php bk_bottomline();?>

<?php wp_footer(); ?>
</body>

</html>