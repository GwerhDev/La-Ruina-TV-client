import s from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={s.ruinaContFooter}>
            <p>© {new Date().getFullYear()} LA RUINA</p>
            <div className={s.columnsContainer}>
                <div className={s.column}>
                    <p>Contáctanos</p>
                    <p>Acerca de nosotros</p>
                    <p>La Ruina Records</p>
                    <p>TerminalKiller Project</p>
                </div>
                <div className={s.column}>
                    <p>Términos de uso</p>
                    <p>Política de privacidad</p>
                    <p>Acerca de esta página</p>
                </div>
                <div className={s.column}>
                    <p>La Ruina Hub</p>
                    <p>La Ruina Play</p>
                    <p>La Ruina Merch</p>
                </div>
                <div className={s.column}>
                    <p>Soporte técnico</p>
                </div>
            </div>
        </div>
    )
}
