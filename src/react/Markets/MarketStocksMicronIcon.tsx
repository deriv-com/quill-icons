import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksMicronIcon = (
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
    <g clipPath='url(#dd38a43af63a8a0eff19fa7a19bd249b__a)'>
      <path
        fill='#104076'
        d='M15.441 17.978c-1.14 0-2.162-.647-2.162-1.552 0-.906 1.023-1.553 2.17-1.553.5 0 .965.126 1.472.408l-.357.459a2.6 2.6 0 0 0-1.114-.251c-.483 0-1.04.27-1.04.937 0 .666.549.936 1.04.936.407 0 .797-.082 1.13-.227l.358.485c-.424.226-.94.358-1.497.358M21.94 17.965c1.148 0 2.17-.648 2.17-1.552 0-.906-1.022-1.553-2.17-1.553s-2.17.647-2.17 1.553c0 .904 1.023 1.552 2.17 1.552m1.04-1.552c0 .666-.557.936-1.04.936-.482 0-1.039-.27-1.039-.936 0-.667.557-.937 1.04-.937.482 0 1.04.27 1.04.937M24.586 17.879h1.071V16.03c0-.25.194-.543.541-.545.242.002.475.168.475.378l-.002 2.016h1.074v-2.073c0-.546-.585-1.001-1.283-1.001h-.041a1.5 1.5 0 0 0-.786.225c-.002-.008-.062-.206-1.05-.206zM11.71 17.89h1.05v-2.954h-1.05zM17.438 17.879h1.05v-1.792c0-.283.333-.51.69-.51.175 0 .34.036.478.097v-.777a3 3 0 0 0-.376-.03c-.281 0-.563.082-.795.22-.017-.035-.145-.2-1.047-.2zM28.156 15.199h.039c.044 0 .081-.016.081-.058 0-.03-.02-.059-.081-.059l-.04.002zm0 .186h-.054v-.337h.006c.026-.004.052-.008.09-.008q.075.002.104.026.03.022.03.07c0 .044-.029.07-.065.082v.002q.046.007.056.082a.3.3 0 0 0 .022.083h-.056a.3.3 0 0 1-.023-.086c-.008-.043-.03-.059-.073-.059h-.037zm.056-.43a.25.25 0 0 0-.241.254c0 .144.108.257.242.257.135.001.242-.113.242-.255a.25.25 0 0 0-.242-.257zm.001-.048c.165 0 .297.135.297.302 0 .171-.132.304-.298.304a.3.3 0 0 1-.3-.304.3.3 0 0 1 .3-.302z'
      />
      <path
        fill='#104076'
        d='M9.712 16.702v1.187h1.076l-.008-2.154c1.184-1.221 1.674-2.357 1.292-2.903-.398-.571-1.636-.34-3.24.508a2 2 0 0 0-.183.105c-.078.054-.032.093.025.072q.087-.03.2-.084c1.204-.57 2.142-.673 2.509-.275.559.607-.586 2.594-2.568 4.065a14 14 0 0 1-.939.643l-.007.005a3 3 0 0 0-.228.155c-.048.038-.039.097.048.06q.08-.035.185-.099l.022-.013.012-.007.012-.007a23 23 0 0 0 1.046-.7c.26-.182.515-.373.746-.559'
      />
      <path
        fill='#104076'
        d='M5.505 19.421H6.58v-1.114q.443-.263.884-.563a2 2 0 0 0 .166-.13c.07-.063.02-.096-.035-.067q-.084.044-.19.113c-1.662 1.063-2.783 1.387-3.197.825-.36-.488.23-1.432 1.297-2.497v2.473q.453-.153 1.075-.497v-2.295l.236.503c.259.556.73.888 1.328.888.597 0 1.068-.332 1.327-.888l.237-.503v.585c.384-.373.713-.745.962-1.106.03-.044.028-.082.011-.123a1.03 1.03 0 0 0-.929-.584c-.405 0-.757.235-.926.575l-.45.955a.25.25 0 0 1-.232.144.25.25 0 0 1-.233-.144l-.45-.955a1.04 1.04 0 0 0-.382-.42c.329-.261.649-.494.963-.685q.107-.067.18-.125c.049-.037.04-.097-.047-.06a1.5 1.5 0 0 0-.19.097c-.321.195-.65.394-.964.61q-.058.038-.114.077a1.029 1.029 0 0 0-1.403.96v.143c-1.518 1.354-2.316 2.695-1.899 3.292.306.438 1.031.337 1.9-.04z'
      />
      <path
        fill='#F6F7F8'
        fillRule='evenodd'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16m-18.72.426c0 .905 1.022 1.552 2.161 1.552.557 0 1.073-.132 1.497-.358l-.358-.485a2.9 2.9 0 0 1-1.13.227c-.491 0-1.04-.27-1.04-.936 0-.667.557-.937 1.04-.937.407 0 .79.094 1.114.251l.357-.459c-.507-.283-.973-.408-1.471-.408-1.148 0-2.17.647-2.17 1.553m10.83-.013c0 .904-1.022 1.552-2.17 1.552s-2.17-.648-2.17-1.552c0-.906 1.023-1.553 2.17-1.553s2.17.647 2.17 1.553m1.547 1.466h-1.072v-3.055c.988 0 1.048.198 1.05.206a1.5 1.5 0 0 1 .786-.225h.041c.698 0 1.283.455 1.283 1.001v2.073H26.67l.003-2.016c0-.21-.233-.376-.475-.378a.545.545 0 0 0-.54.545zm-12.898.011h-1.05v-2.954h1.05zm5.73-.011h-1.05v-2.993c.9 0 1.03.166 1.046.2.232-.137.514-.218.795-.218.118 0 .252.01.376.029v.777a1.2 1.2 0 0 0-.477-.096c-.358 0-.69.226-.69.51zm-8.777.01v-1.187c-.231.185-.485.376-.746.558a23 23 0 0 1-1.046.7l-.012.007-.012.007-.022.013a2 2 0 0 1-.185.099c-.087.037-.096-.022-.048-.06a3 3 0 0 1 .228-.155l.007-.005c.266-.16.674-.447.939-.643 1.982-1.47 3.127-3.458 2.568-4.065-.367-.398-1.305-.295-2.508.275a2 2 0 0 1-.201.084c-.057.02-.103-.018-.025-.072q.072-.051.182-.105c1.605-.848 2.843-1.079 3.241-.508.382.546-.108 1.682-1.292 2.903l.008 2.154zM6.58 19.421H5.505v-.556c-.869.377-1.594.478-1.9.04-.417-.597.38-1.938 1.9-3.292v-.142a1.03 1.03 0 0 1 1.402-.96l.114-.079c.314-.215.643-.414.965-.609.068-.042.136-.075.19-.097.086-.037.095.023.046.06q-.074.058-.18.125a10 10 0 0 0-.963.685c.163.102.296.247.382.42l.45.955a.25.25 0 0 0 .233.144c.1 0 .186-.051.232-.144l.45-.955c.169-.34.52-.575.926-.575.41 0 .763.238.93.584.016.041.019.079-.012.123-.25.36-.578.733-.963 1.106v-.585l-.236.503c-.26.556-.73.888-1.327.888-.599 0-1.069-.332-1.328-.888l-.237-.503v2.294q-.621.345-1.074.498v-2.473c-1.067 1.065-1.657 2.009-1.297 2.497.414.562 1.535.238 3.196-.825q.107-.069.191-.113c.054-.029.104.004.035.068a2 2 0 0 1-.166.129c-.293.199-.59.39-.884.563zm21.93-4.212a.3.3 0 0 0-.297-.302h-.001a.3.3 0 0 0-.3.302.3.3 0 0 0 .3.304.3.3 0 0 0 .298-.304'
        clipRule='evenodd'
      />
      <path
        fill='#F6F7F8'
        d='M22.98 16.413c0 .666-.557.936-1.04.936-.482 0-1.039-.27-1.039-.936 0-.667.557-.937 1.04-.937.482 0 1.04.27 1.04.937'
      />
      <path
        fill='#104076'
        fillRule='evenodd'
        d='M13.28 16.426c0 .905 1.022 1.552 2.161 1.552.557 0 1.073-.132 1.497-.358l-.358-.485a2.9 2.9 0 0 1-1.13.227c-.491 0-1.04-.27-1.04-.936 0-.667.557-.937 1.04-.937.407 0 .79.094 1.114.251l.357-.459c-.507-.283-.973-.408-1.471-.408-1.148 0-2.17.647-2.17 1.553m10.83-.013c0 .904-1.022 1.552-2.17 1.552s-2.17-.648-2.17-1.552c0-.906 1.023-1.553 2.17-1.553s2.17.647 2.17 1.553m1.547 1.466h-1.072v-3.055c.988 0 1.048.198 1.05.206a1.5 1.5 0 0 1 .786-.225h.041c.698 0 1.283.455 1.283 1.001v2.073H26.67l.003-2.016c0-.21-.233-.376-.475-.378a.545.545 0 0 0-.54.545zm-12.898.011h-1.05v-2.954h1.05zm5.73-.011h-1.05v-2.993c.9 0 1.03.166 1.046.2.232-.137.514-.218.795-.218.118 0 .252.01.376.029v.777a1.2 1.2 0 0 0-.477-.096c-.358 0-.69.226-.69.51zm10.021-2.67a.3.3 0 0 0-.297-.302h-.001a.3.3 0 0 0-.3.302.3.3 0 0 0 .3.304.3.3 0 0 0 .298-.304m-6.57 2.14c.483 0 1.04-.27 1.04-.936 0-.667-.557-.937-1.04-.937-.482 0-1.039.27-1.039.937 0 .666.557.936 1.04.936m6.272-2.395a.25.25 0 0 0-.241.255c0 .144.108.257.242.257.135.001.242-.113.242-.255a.25.25 0 0 0-.242-.257zm-.11.431h.054v-.145h.037c.043 0 .065.016.073.06a.3.3 0 0 0 .023.085h.056a.3.3 0 0 1-.022-.083q-.01-.074-.056-.082v-.002c.036-.011.066-.038.066-.082q0-.048-.031-.07-.03-.024-.105-.026c-.037 0-.063.004-.09.008h-.005zm.093-.186h-.04v-.114l.04-.003c.06 0 .081.03.081.06 0 .04-.037.057-.081.057'
        clipRule='evenodd'
      />
      <path
        fill='#F6F7F8'
        d='M28.156 15.199h.039c.044 0 .081-.016.081-.058 0-.03-.02-.059-.081-.059l-.04.002z'
      />
      <path
        fill='#F6F7F8'
        fillRule='evenodd'
        d='M28.212 14.955a.25.25 0 0 0-.241.254c0 .144.108.257.242.257.135.001.242-.113.242-.255a.25.25 0 0 0-.242-.257zm-.11.43h.054v-.145h.037c.043 0 .065.016.073.06a.3.3 0 0 0 .023.085h.056a.3.3 0 0 1-.022-.083q-.01-.074-.056-.082v-.002c.036-.011.066-.038.066-.082q0-.048-.031-.07-.03-.024-.105-.026c-.037 0-.063.004-.09.008h-.005z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='dd38a43af63a8a0eff19fa7a19bd249b__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMicronIcon);
export default ForwardRef;
