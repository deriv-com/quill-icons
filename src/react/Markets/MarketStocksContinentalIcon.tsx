import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksContinentalIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#ae6eec1268f4801615e33c1c1aa85598__a)'>
      <path
        fill='#FAAF42'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#231F20'
        d='M19.513 15.538c.206 0 .28.184.28.418v1.785h1.153v-.245h-.315v-1.447a2.2 2.2 0 0 0-.036-.42.68.68 0 0 0-.701-.543.75.75 0 0 0-.7.448h-.013v-.398h-1.042v.238h.246v2.122h-.246v.245h1.326v-.245h-.241v-1.54c0-.234.083-.418.289-.418M14.16 15.538c.206 0 .282.184.282.418l-.002 1.785h1.154v-.245h-.318v-1.447a2 2 0 0 0-.036-.42.68.68 0 0 0-.703-.543.75.75 0 0 0-.698.448h-.013v-.398h-1.041v.238h.246v2.122h-.246v.245h1.328v-.245h-.24v-1.54c0-.234.08-.418.287-.418M22.075 17.3v-1.927h.404v-.237h-.405v-.701h-.155a44 44 0 0 1-.97.765v.174h.284v1.778c0 .422.241.62.655.62.353 0 .513-.097.513-.097v-.238a.5.5 0 0 1-.156.028c-.083 0-.17-.032-.17-.164M6.463 14.735c-.296-.324-.934-.95-.934-.95v.35a2.9 2.9 0 0 0-.962-.157c-1.404 0-2.567 1.08-2.567 2.46s1.048 2.465 2.567 2.465c.85 0 1.533-.327 1.905-.831v-.235a1.92 1.92 0 0 1-1.381.578c-1.234 0-1.944-.88-1.944-1.976 0-1.095.749-1.981 1.944-1.981.528 0 1.096.238 1.372.523z'
      />
      <path
        fill='#231F20'
        fillRule='evenodd'
        d='M17.171 17.288c.279 0 .464-.103.582-.24l.14.128c-.19.374-.516.614-1.032.614-.802 0-1.21-.595-1.21-1.348 0-.752.412-1.356 1.21-1.356s1.104.545 1.104 1.28c0 .045-.004.139-.009.185H16.54c.015.605.39.737.631.737m-.337-1.934c-.239 0-.294.258-.294.944h.592c-.009-.692-.06-.943-.299-.943M5.187 17.866c-.842 0-1.333-.64-1.333-1.427 0-.788.492-1.427 1.333-1.427s1.334.64 1.334 1.427c0 .788-.491 1.427-1.334 1.427m0-2.581c-.275 0-.35.35-.35 1.146s.078 1.146.35 1.146c.273 0 .35-.35.35-1.146s-.074-1.146-.35-1.146'
        clipRule='evenodd'
      />
      <path
        fill='#231F20'
        d='M8.116 15.538c.207 0 .282.184.282.418v1.785h1.156v-.245h-.317v-1.447q0-.212-.036-.42a.68.68 0 0 0-.702-.543.75.75 0 0 0-.7.448h-.013v-.398H6.744v.238h.245v2.122h-.245v.245h1.325v-.245h-.243v-1.54c0-.234.083-.418.29-.418M11.913 14.829c-.301 0-.512-.151-.512-.384 0-.228.21-.38.512-.38.301 0 .513.148.513.38 0 .233-.212.384-.513.384M10.677 17.3v-1.927h.327v-.237h-.326v-.701h-.155c-.221.18-.484.386-.736.582l-.233.183v.174h.282v1.778c0 .422.241.62.654.62.353 0 .513-.097.513-.097v-.238a.5.5 0 0 1-.155.028c-.084 0-.17-.032-.17-.164M26.485 17.496h-.323v-3.322h-1.128v.237h.29v3.33h.88v.107H30v-.121h-3.515z'
      />
      <path
        fill='#231F20'
        fillRule='evenodd'
        d='M23.945 17.429h.012l.002.312h1.073v-.245h-.27v-1.467c0-.569-.382-.944-1.024-.944-.382 0-.79.184-1.056.59l.144.175a.77.77 0 0 1 .607-.304c.29 0 .487.168.487.484v.163s-.13-.054-.377-.054c-.602 0-.979.331-.979.853 0 .433.271.798.702.798.32 0 .525-.146.679-.361m-.205-1.034c.107 0 .159.032.181.056v.803a.26.26 0 0 1-.197.078c-.214 0-.29-.196-.29-.445 0-.25.055-.492.306-.492'
        clipRule='evenodd'
      />
      <path
        fill='#231F20'
        d='M11.248 17.496v.245h1.323v-.245h-.245v-2.36h-1.078v.238h.242v2.122zM28.1 17.138l.358-.336.148.144-.385.32a1 1 0 0 0-.072.138h-.284c.016-.103.161-.23.234-.266M26.908 14.994l-.294.08q-.1.036-.191.087c-.058.039-.126.103-.127.138l.25.057q.057-.063.122-.118l.059-.027.209-.21a.026.026 0 0 0-.028-.008'
      />
      <path
        fill='#231F20'
        d='M28.626 15.676a4.4 4.4 0 0 1-.431-.534c.085-.16.148-.584.108-.748a1.7 1.7 0 0 0-.191-.271l-.007-.008c-.047-.048-.137-.142-.185-.142q-.015 0-.027.008l.016.142c-.151.095-.35.225-.528.354 0 .05.005.127.007.154q.043.035.093.053.033-.005.09-.018c.093-.02.215-.045.256-.04l-.215.318-.245.17-.308-.095a.053.053 0 0 0-.05.016l-.222.24a.06.06 0 0 0-.02.05l-.008.272s-.003.04-.003.087c0 .195.09.285.09.285l.147-.209a.7.7 0 0 1-.063-.152l.004-.233.144-.104.38.264q.09.162.207.305c.065.08.395.297.555.39q.03.15.078.293l.467.47-.277.34c-.097.06-.19.172-.183.275h.319l.036-.18.38-.416c.02-.023.02-.036.01-.068l-.11-.36c.054-.062.17-.215.17-.398 0-.249-.21-.358-.363-.438a1 1 0 0 1-.122-.072M29.224 16.229a1.2 1.2 0 0 0-.09-.235s.017-.016.048.004l.23.151c.1.146.162.742.167.956a1.3 1.3 0 0 1-.312-.195zM25.459 19.231h-.12v.97h.192v-.731a.6.6 0 0 1 .287-.096c.094 0 .149.033.149.153v.673h.193v-.716c0-.212-.116-.268-.253-.268a.64.64 0 0 0-.377.137c-.004-.102-.024-.122-.071-.122'
      />
      <path
        fill='#231F20'
        fillRule='evenodd'
        d='M24.614 20.213c.268 0 .472-.186.472-.494s-.203-.503-.472-.503-.47.193-.47.503.203.494.47.494m0-.144c-.164 0-.274-.117-.274-.351 0-.235.11-.36.274-.36s.276.127.276.36-.108.351-.276.351'
        clipRule='evenodd'
      />
      <path
        fill='#231F20'
        d='M23.794 19.125a.11.11 0 0 0 .112-.108.11.11 0 0 0-.067-.108.113.113 0 1 0-.045.216M23.886 20.203v-.827c0-.122-.01-.144-.084-.144h-.108v.97zM22.861 19.368h.119v.596c0 .18.1.251.266.251a.6.6 0 0 0 .157-.02v-.121h-.089c-.097 0-.14-.03-.14-.131v-.575h.218v-.133h-.22v-.263h-.193v.263h-.118z'
      />
      <path
        fill='#231F20'
        fillRule='evenodd'
        d='M22.243 20.216c.267 0 .47-.186.47-.494s-.203-.503-.47-.503c-.268 0-.472.193-.472.503s.203.494.472.494m0-.144c-.167 0-.277-.117-.277-.351 0-.235.11-.36.277-.36.166 0 .275.127.275.36s-.108.351-.275.351'
        clipRule='evenodd'
      />
      <path
        fill='#231F20'
        d='M20.251 20.204h.17v-1.062h.009l.372 1.058h.128l.379-1.058h.004V20.2h.204v-1.297h-.28l-.347.984h-.004l-.35-.984h-.285zM18.75 19.234h-.121v.97h.192v-.734a.6.6 0 0 1 .29-.096c.093 0 .148.033.148.153v.673h.193v-.716c0-.212-.114-.268-.254-.268a.64.64 0 0 0-.377.137c-.004-.102-.025-.122-.072-.122zM18.21 19.123a.11.11 0 0 0 .114-.108.114.114 0 0 0-.227 0 .11.11 0 0 0 .113.108M18.304 20.2v-.824c0-.122-.008-.144-.084-.144h-.108v.97z'
      />
      <path
        fill='#231F20'
        fillRule='evenodd'
        d='M17.383 19.753v-.067c0-.319-.152-.469-.413-.469s-.449.193-.449.503.167.494.467.494c.13.005.258-.03.366-.103v-.13h-.062a.43.43 0 0 1-.274.089c-.184 0-.29-.089-.3-.317zm-.412-.406c.136 0 .218.072.223.28h-.471c.021-.205.12-.28.248-.28'
        clipRule='evenodd'
      />
      <path
        fill='#231F20'
        d='m16.333 19.384.042.003v-.157a.2.2 0 0 0-.052-.007.38.38 0 0 0-.283.144c-.004-.114-.025-.134-.072-.134h-.12v.97h.192v-.71a.44.44 0 0 1 .293-.109M15.048 20.068c-.09 0-.153-.03-.153-.154v-.683h-.191v.722c0 .197.114.26.268.26a.65.65 0 0 0 .358-.123c.004.095.023.108.068.108h.124v-.97h-.192v.742a.6.6 0 0 1-.28.092zM13.923 19.362h.119v.596c0 .18.1.252.267.252a.6.6 0 0 0 .156-.02v-.122h-.088c-.097 0-.143-.03-.143-.13v-.575h.22v-.134h-.22v-.263h-.193v.263h-.119zM13.203 20.062c-.09 0-.152-.03-.152-.154v-.677h-.193v.722c0 .197.116.26.27.26a.64.64 0 0 0 .356-.123c.006.095.026.108.07.108h.12v-.97h-.192v.742a.6.6 0 0 1-.279.092M12.09 20.197v-.555h.463v-.15h-.464v-.433h.609v-.156h-.812V20.2z'
      />
      <path
        fill='#231F20'
        fillRule='evenodd'
        d='M11.14 19.752v-.017q.003-.023.002-.05c0-.319-.153-.47-.413-.47-.259 0-.45.193-.45.504 0 .31.167.494.47.494a.6.6 0 0 0 .363-.1v-.132h-.063a.43.43 0 0 1-.274.089c-.184 0-.29-.089-.3-.317zm-.411-.409c.135 0 .219.072.222.281h-.472c.02-.206.121-.28.25-.28'
        clipRule='evenodd'
      />
      <path
        fill='#231F20'
        d='M9.4 19.028c0-.108-.015-.125-.088-.125h-.105V20.2H9.4v-.73a.6.6 0 0 1 .287-.096c.093 0 .15.033.15.153v.673h.19v-.716c0-.212-.114-.268-.252-.268a.64.64 0 0 0-.376.137zM8.602 20.2v-1.145h.38v-.152h-.964v.152h.378V20.2z'
      />
    </g>
    <defs>
      <clipPath id='ae6eec1268f4801615e33c1c1aa85598__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksContinentalIcon);
export default ForwardRef;
