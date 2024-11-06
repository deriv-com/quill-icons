import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagTurksAndCaicosIslandsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#000089'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      d='M5 0v2.131L1.815.008C1.042.08.396.59.13 1.288L2.697 3H0v2h2.697L0 6.798V8h1.803L5 5.869V8h2V5.869L10.197 8H12V6.798L9.303 5H12V3H9.303L12 1.202V0h-1.803L7 2.131V0z'
    />
    <path fill='#F44336' d='M5.5 0v3.5H0v1h5.5V8h1V4.5H12v-1H6.5V0z' />
    <path
      fill='#F44336'
      d='m11.55 0-4.5 3h.9L12 .3V0zM0 8h.45l4.5-3h-.9L0 7.7zM.524.65 4.05 3h.902L.923.315A2 2 0 0 0 .524.65M7.95 5 12 7.7V8h-.45l-4.5-3z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M17.96 12.39h.002l.036.01.037-.01h.002l.007-.002.026-.007.094-.029a5.327 5.327 0 0 0 1.34-.651C20.233 11.203 21 10.374 21 9.09V4h-6v5.09c0 1.284.765 2.113 1.495 2.61a5.3 5.3 0 0 0 1.432.68l.026.008zm-2.804-3.3V4.172h5.688V9.09c0 2.395-2.846 3.134-2.846 3.134s-2.842-.74-2.842-3.134'
      clipRule='evenodd'
    />
    <path
      fill='#FCD116'
      d='M15.156 4.172V9.09c0 2.395 2.842 3.134 2.842 3.134s2.846-.74 2.846-3.134V4.172z'
    />
    <path
      fill='#FCAD56'
      d='M16.773 7.712c.11.05.299-.006.381-.164-.152.138-.247-.027-.287-.232s-.042-.43-.268-.608c-.223-.185-.134-.497.052-.621.152-.1.17-.26.156-.474-.046-.04-.09-.105-.147-.108.015-.178-.104-.258-.192-.288-.083-.034-.113-.071-.128-.148q-.023-.106-.138-.141c-.079-.027-.15-.115-.18-.152-.027-.043-.036-.033-.06.034-.022.07-.117.202-.031.205-.061.054-.095.118-.058.202-.043.033-.067.087-.015.11.058.017.073.037.076.05-.049 0-.064.112.058.135-.028.007-.037.1.012.1-.07 0-.125.108-.21.108q-.133.002-.138.064c-.003.04-.046.088-.07.108.061.006.104 0 .14-.027.034-.027.092-.034.125 0a.26.26 0 0 0 .156.037c-.082.064-.143.148-.152.222-.007.08-.052.17-.11.194a.32.32 0 0 0-.159.172c.07.191.174.238.275.289q.204.085.366.248c.073.09.104.024.213.182.116.157.22.453.333.503'
    />
    <path
      fill='#FFA1A1'
      d='M17.343 5.417a.3.3 0 0 1-.024-.12c0-.097-.171-.33-.308-.386-.104.12-.238.248-.22.47.005.04.013.185.016.232.014.213-.004.374-.156.474-.186.124-.275.436-.052.621.226.178.229.403.268.608s.135.37.287.232c.15.023.229-.044.229-.178 0-.128.01-.205.122-.242.11-.044.14-.084.195-.195.052-.11.082-.161.052-.225a.55.55 0 0 1-.018-.302c.024-.101-.03-.151-.061-.215a.3.3 0 0 1-.025-.199c.012-.083-.024-.134-.079-.174-.049-.044-.07-.084-.061-.151.012-.064-.037-.104-.095-.155a.3.3 0 0 1-.07-.095'
    />
    <path
      fill='#CE1126'
      d='M18.004 9.278a1.6 1.6 0 0 1-.64-.123c-.15-.074-.154-.14-.095-.22.028-.037.072-.04.124-.027q.056.016.12.049c.092.043.354.075.49.075.137 0 .4-.032.492-.08a1 1 0 0 1 .116-.044c.053-.013.099-.01.127.027.06.081.055.148-.101.223l-.03.013c-.156.07-.39.107-.603.107'
    />
    <path
      fill='#FCD116'
      d='M17.753 9.416c-.012.033.034.11.009.17-.028.057.014.146-.014.217s.044.161.016.244c-.03.084.014.188 0 .265-.011.078.03.227 0 .28-.03.057.03.072-.005.208-.034.137-.057.021-.036-.02.043-.093-.049-.122-.005-.212.044-.089-.025-.154 0-.28.023-.11-.035-.136 0-.244.035-.11-.025-.175 0-.258s-.014-.14.005-.218c.016-.077-.035-.116-.005-.211.023-.095.046.027.035.06m-.194.096c-.016.035.028.104-.012.172-.027.048.019.105-.02.173-.026.048.025.107-.01.176-.023.038.017.113-.011.17-.028.059.014.106-.035.184-.027.041.021.146-.009.178-.03.033-.002.161-.023.179-.018.02 0 .113-.05.134.024-.045-.026-.09.016-.155.043-.065-.007-.14.023-.187.03-.051-.019-.117.016-.179.034-.06-.025-.11.016-.176.044-.068-.016-.122.018-.178.035-.054-.02-.092.016-.167.04-.071-.025-.11.019-.181.041-.072-.019-.128.02-.2.04-.071-.013-.09.017-.16.055.026.027.181.009.217m-.115-.194c-.023.048.01.104-.025.164-.035.062 0 .14-.035.19-.035.048.01.143-.035.182-.043.039-.016.155-.05.193-.035.04 0 .15-.04.206-.039.056-.02.172-.043.2-.021.026.03.083-.007.121-.04.039-.04.116-.09.167.03-.039-.01-.095.035-.152.041-.053-.019-.11.032-.181.053-.072-.003-.15.044-.212.046-.06-.01-.125.039-.187.046-.06-.01-.104.037-.173.048-.065-.007-.119.039-.181.048-.06-.005-.105.039-.176.044-.074-.014-.107.025-.173.019-.03.019-.056.019-.08.027-.092.027.068.016.092M18.245 9.416c.012.033-.034.11-.009.17.028.057-.014.146.014.217.027.072-.044.161-.016.244.03.084-.014.188 0 .265.011.078-.03.227 0 .28.03.057-.03.072.004.208.035.137.058.021.037-.02-.044-.093.049-.122.005-.212-.044-.089.025-.154 0-.28-.023-.11.034-.136 0-.244-.035-.11.025-.175 0-.258s.014-.14-.005-.218c-.016-.077.035-.116.005-.211-.023-.095-.046.027-.035.06m.194.096c.016.035-.028.104.011.172.028.048-.018.105.021.173.025.048-.025.107.01.176.022.038-.017.113.01.17.028.059-.013.106.035.184.028.041-.02.146.01.178.03.033.002.161.023.179.018.02 0 .113.05.134-.025-.045.026-.09-.016-.155-.044-.065.007-.14-.023-.187-.03-.051.018-.117-.016-.179-.035-.06.025-.11-.016-.176-.044-.068.016-.122-.019-.178-.034-.054.021-.092-.016-.167-.039-.071.026-.11-.018-.181-.042-.072.018-.128-.02-.2-.04-.071.013-.09-.017-.16-.055.026-.028.181-.01.217m.115-.194c.023.048-.01.104.025.164.035.062 0 .14.035.19.034.048-.01.143.034.182s.017.155.051.193c.035.04 0 .15.04.206.038.056.02.172.043.2.02.026-.03.083.007.121.04.039.04.116.09.167-.03-.039.009-.095-.035-.152-.041-.053.019-.11-.032-.181-.053-.072.002-.15-.044-.212-.046-.06.01-.125-.039-.187-.046-.06.01-.104-.037-.173-.048-.065.007-.119-.039-.181-.048-.06.005-.105-.04-.176-.043-.074.015-.107-.024-.173-.019-.03-.019-.056-.019-.08-.028-.092-.028.068-.016.092'
    />
    <path
      fill='#D80027'
      d='M18.611 8.865a.7.7 0 0 0-.178-.475.58.58 0 0 0-.431-.197.58.58 0 0 0-.43.197.7.7 0 0 0-.18.475v.043q.058.016.12.049c.093.043.355.075.492.075.136 0 .399-.032.491-.08a1 1 0 0 1 .116-.044z'
    />
    <path
      fill='#009E49'
      fillRule='evenodd'
      d='M16.988 10.878h.4c.025-.045-.025-.09.017-.155s-.007-.14.023-.187c.03-.051-.019-.117.016-.179.034-.06-.025-.11.016-.176.044-.068-.016-.122.018-.178.035-.054-.02-.092.016-.167.04-.071-.025-.11.019-.181.041-.072-.019-.128.02-.2.04-.071-.013-.09.017-.16.055.026.027.181.009.217-.016.035.028.104-.012.172-.027.048.019.105-.02.173-.026.048.025.107-.01.176-.023.038.017.113-.011.17-.028.059.014.106-.035.184-.027.041.021.146-.009.178-.03.033-.002.161-.023.179-.018.02 0 .113-.05.134h1.22c-.05-.021-.032-.113-.05-.134-.021-.018.006-.146-.024-.179-.03-.032.019-.137-.009-.178-.048-.078-.007-.125-.034-.185-.028-.056.011-.13-.012-.17-.034-.068.016-.127-.009-.175-.04-.068.007-.125-.02-.173-.04-.068.004-.137-.012-.172-.019-.036-.046-.19.009-.218.03.072-.023.09.016.161.04.072-.02.128.02.2.045.071-.02.11.02.181.036.075-.02.113.015.167.035.056-.025.11.019.178.041.066-.019.116.016.176.035.063-.014.128.016.179.03.047-.02.122.023.187.042.066-.01.11.016.155h.404c0-.746-.284-1.495-.376-1.72l-.03.013c-.156.07-.39.107-.603.107a1.6 1.6 0 0 1-.64-.123c-.09.221-.377.973-.377 1.723m.774-1.292c.025-.06-.021-.137-.01-.17.012-.032-.011-.154-.034-.059-.03.095.02.134.005.211-.019.078.02.134-.005.218s.035.148 0 .258c-.035.108.023.134 0 .245-.025.125.044.19 0 .28-.044.089.048.118.005.21-.021.042.002.158.037.021.034-.136-.026-.151.004-.208.03-.053-.011-.202 0-.28.014-.077-.03-.181 0-.265.028-.083-.044-.172-.016-.244.028-.071-.014-.16.014-.217m-.343-.104c.034-.06.002-.116.025-.164.011-.024.011-.184-.016-.092 0 .024 0 .05-.019.08-.039.066.019.099-.025.173-.044.071.01.116-.04.176-.045.062.01.116-.038.181-.047.069.009.113-.037.173-.049.062.007.128-.04.187-.046.063.01.14-.043.212-.05.071.009.128-.032.181-.044.057-.005.113-.035.152.05-.05.05-.128.09-.167.037-.038-.014-.095.007-.122.023-.027.004-.143.043-.2.04-.056.005-.166.04-.205.034-.038.007-.154.05-.193s0-.134.035-.182c.035-.05 0-.128.035-.19m.817.104c-.025-.06.02-.137.01-.17-.012-.032.01-.154.034-.059.03.095-.02.134-.005.211.019.078-.02.134.005.218s-.035.148 0 .258c.034.108-.023.134 0 .245.025.125-.044.19 0 .28.044.089-.049.118-.005.21.02.042-.002.158-.037.021-.034-.136.026-.151-.004-.208-.03-.053.011-.202 0-.28-.014-.077.03-.181 0-.265-.028-.083.043-.172.016-.244-.028-.071.014-.16-.014-.217m.343-.104c-.034-.06-.002-.116-.025-.164-.012-.024-.012-.184.016-.092 0 .024 0 .05.018.08.04.066-.018.099.026.173.044.071-.01.116.039.176.046.062-.01.116.04.181.045.069-.01.113.036.173.048.062-.007.128.04.187.045.063-.01.14.043.212.05.071-.01.128.032.181.044.057.005.113.035.152-.05-.05-.05-.128-.09-.167-.037-.038.014-.095-.007-.122-.023-.027-.005-.143-.044-.2-.039-.056-.004-.166-.039-.205s-.007-.154-.05-.193 0-.134-.035-.182c-.035-.05 0-.128-.035-.19'
      clipRule='evenodd'
    />
    <path
      fill='#9E540A'
      d='M19.149 4.419c-.016.065.15.302.15.56v.037q.048.045.072.107a2 2 0 0 0 .005-.143.83.83 0 0 0-.227-.561'
    />
    <path
      fill='#9E540A'
      fillRule='evenodd'
      d='M19.524 4.98c0-.259.167-.496.15-.561a.83.83 0 0 0-.226.56q0 .082.004.146a.4.4 0 0 0-.018.056l-.022-.017-.022.016a.4.4 0 0 0-.019-.057.3.3 0 0 0-.072-.107.3.3 0 0 0-.045-.033l-.027-.016.014-.029q-.016 0-.038.018a.3.3 0 0 0-.11-.018c-.145 0-.272.1-.346.237a.7.7 0 0 0-.05.121c-.176-.117-.297-.193-.325-.17 0 .029.147.148.304.27a1.3 1.3 0 0 0-.01.204v.014c-.257-.063-.528-.043-.528-.013.032.032.306.036.531.109l.009.248c-.277-.047-.567.01-.567.04.038.032.34.014.571.062l.01.188c-.294.006-.517.188-.517.221.037.034.297-.125.52-.134.008.156.016.31.022.505l.001.042c.006.209.013.42-.021.646a4 4 0 0 1-.054.277c.04-.096.067-.188.09-.288.052-.198.043-.442.037-.6l-.003-.074c-.004-.165-.01-.297-.014-.42l-.003-.087.01.001c.082.01.157.032.221.057.043.217.105.453.175.643l-.28.695c.17.078.352.119.536.12.184-.001.366-.042.536-.12l-.284-.7q.113-.31.173-.636a1 1 0 0 1 .237-.06l-.003.087c-.005.123-.01.255-.014.42l-.002.075c-.006.157-.016.4.036.599.023.1.05.192.09.288a4 4 0 0 1-.053-.277 3.4 3.4 0 0 1-.022-.646l.002-.042c.005-.195.013-.35.02-.505.224.01.484.168.52.135 0-.034-.222-.215-.515-.222l.01-.189c.23-.047.531-.03.569-.06 0-.031-.29-.088-.566-.041l.009-.249c.225-.072.498-.076.53-.108 0-.03-.27-.05-.527.013a1.4 1.4 0 0 0-.01-.22c.157-.12.303-.239.303-.268-.028-.023-.149.053-.324.17a.7.7 0 0 0-.05-.121c-.074-.137-.201-.237-.346-.237a.3.3 0 0 0-.11.018q-.023-.017-.039-.018l.015.029-.027.016a.3.3 0 0 0-.046.034zm-.71.24a.32.32 0 0 1 .232-.19.3.3 0 0 1 .088 0h.003a.55.55 0 0 0-.103.273c0 .052.025.112.058.17l-.046.067a3 3 0 0 0-.17-.123l-.097-.066-.01-.007a.6.6 0 0 1 .045-.125m1.196 0a.32.32 0 0 0-.232-.19.3.3 0 0 0-.092 0 .55.55 0 0 1 .103.273.4.4 0 0 1-.059.171q.025.034.048.07l.169-.127.097-.066.011-.007a.6.6 0 0 0-.045-.125m-.118.613q.005.037.005.075l-.01.125.1-.035a1 1 0 0 1 .098-.028l.002-.236-.023.01a3 3 0 0 0-.172.09m-.023-.1.118-.062a1 1 0 0 1 .1-.038 2 2 0 0 0-.012-.182l-.052.04a5 5 0 0 0-.19.153 1 1 0 0 1 .036.088m-.183-.315a.22.22 0 0 0 .04-.115.56.56 0 0 0-.086-.259.269.269 0 0 0-.107.102q.007.069.016.13.066.06.137.142m-.549-.001q.072-.083.137-.141.01-.063.016-.13a.3.3 0 0 0-.026-.038.2.2 0 0 0-.08-.064.6.6 0 0 0-.086.259q.001.056.04.114m-.337.073q.095.072.188.153a1 1 0 0 0-.035.088l-.116-.06a1 1 0 0 0-.1-.038q.002-.09.012-.182zm.123.422q0-.04.006-.08a3 3 0 0 0-.192-.098q0 .13.003.236a1 1 0 0 1 .097.028l.091.032a2 2 0 0 1-.005-.118m.039.373-.022-.148a2 2 0 0 0-.198-.063l.005.175.036.003q.1.013.179.033m.894.002a1.2 1.2 0 0 1 .221-.038l.005-.175a2 2 0 0 0-.206.066z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagTurksAndCaicosIslandsIcon);
export default ForwardRef;
