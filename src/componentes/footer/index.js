
import './footer.css'

const Footer = () => {
  return (<footer className="footer">
    <section>
      <ul>
        <li>
          <a href="https://github.com/MauriMenezes" target="_blank">
            <img src="/imagens/GitHub-Mark-Light-64px.png" width={40} alt="" />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/menezesms/" target="_blank">
            <img src="/imagens/ig.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src="/imagens/tw.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src="/imagens/fb.png" alt="" />
          </a>
        </li>

      </ul>
    </section>
    <section>
      <img src="/imagens/logo.png" alt="" />
    </section>
    <section>
      <p>
        Desenvolvido por Maurilio Menezes.
      </p>
    </section>
  </footer>)
}

export default Footer