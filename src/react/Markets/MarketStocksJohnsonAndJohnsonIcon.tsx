import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksJohnsonAndJohnsonIcon = (
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
    <g clipPath='url(#acccc8cc32b925803e2ab8c5506018ba__a)'>
      <path
        fill='#E92431'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M25.644 13.52q-.12.086-.212.201l-.436.406c-.2.19-.4.38-.586.584-.038.038-.7.646-.7.646q-.15-1.275-.198-2.56a69 69 0 0 1-.086-2.78c-.014-.912 0-1.824.148-2.736.05-.357.6-1.56-.224-1.207-1.758.76-4.35 2.993-4.4 6.581-.012.76.088 1.522.323 2.258.05.164.113.316.175.48.05.116.226.356.226.484 0 .266-.686.444-.924.495a3.4 3.4 0 0 1-.623.088c-.238.026-.45.102-.524-.127-.1-.33-.124-.735-.312-1.154-.448-.964-1.22-1.686-2.268-1.84-.934-.126-1.87.242-2.692.674-.524.28-1.036.596-1.52.938-.088-.8-.177-1.636-.239-2.574-.137-2.066-.2-4.032.313-6.037.024-.088.038-.19-.012-.266-.076-.114-.25-.076-.374-.024a7.25 7.25 0 0 0-3.49 3.03 7.42 7.42 0 0 0-.961 4.577c.212 1.826 1.184 3.6 2.78 4.45a14.3 14.3 0 0 0-1.76 3.881c-.248.876-.398 1.788-.248 2.677.1.57.4 1.204.96 1.32.474.1.948-.216 1.296-.56 1.11-1.09 1.659-2.637 1.859-4.17.16-1.281.2-2.561.1-3.855l-.076-.888c-.074-.737.45-1.167.986-1.573.374-.28.746-.546 1.17-.724.424-.176.886-.292 1.346-.228.66.09 1.398.546 1.696 1.166.062.14.3.634-.024.61-.076 0-.15-.052-.212-.09a3.6 3.6 0 0 0-2.032-.456 1.8 1.8 0 0 0-.836.28c-.248.177-.424.469-.386.773.012.18.1.342.2.496.155.261.374.48.636.634.598.328 1.308.176 1.956.152.32-.023.641.033.934.164a.84.84 0 0 1 .326.228c.124.152.2.508.36.494.212-.012.288-.494.324-.634.062-.214.076-.532.362-.62.424-.128.86-.24 1.296-.342.212-.052.437-.09.66-.128.15-.024.313-.076.463-.012.224.1.35.354.512.532.2.228.436.42.684.57.05.026.438.228.412.28-.038.076-.088.14-.124.216-1.122 1.888-1.42 2.878-1.708 4.006-.424 1.648-.286 3.41.748 3.627 1.42.304 2.88-2.245 3.204-4.705.212-1.66 0-3.64-.04-5.313 0 0 .4-.393.512-.508.288-.28.574-.57.848-.86.15-.154.286-.306.436-.446.112-.114.274-.24.324-.406.026-.1-.012-.252-.136-.266a.8.8 0 0 0-.212.09M9.986 22.331c-.236 2.485-1.346 2.7-1.844 2.523-.574-.216-.736-2.017.15-4.287.422-1.09.96-2.054 1.444-2.84.226 1.674.374 3.31.25 4.604m.287-15.358c-.325.749-.96 2.169-1.047 4.541-.05 1.56.186 3.46.424 5.339-.188.28-.386.558-.56.85-1.086-.774-1.62-2.399-1.696-4.909-.126-3.752 1.682-5.604 2.666-6.073.25-.128.374-.102.213.252m5.722 9.908c-.024.038-.074.062-.136.088q-.236.044-.474.012a2.2 2.2 0 0 1-.848-.202 1.1 1.1 0 0 1-.436-.356c-.05-.1-.1-.215-.05-.316.024-.064.086-.1.15-.14a1.12 1.12 0 0 1 .946 0c.3.128.548.355.774.596.1.1.136.228.074.318m6.957 5.452c-.238 2.485-1.346 2.7-1.834 2.523-.572-.216-.734-2.017.15-4.287.424-1.09.96-2.054 1.446-2.84.2 1.674.362 3.31.238 4.604m.286-15.358c-.324.749-.972 2.169-1.048 4.541-.048 1.56.188 3.46.424 5.339-.2.28-.386.558-.572.85-1.086-.774-1.62-2.399-1.696-4.909-.112-3.752 1.682-5.605 2.68-6.073.238-.128.36-.102.212.252'
      />
    </g>
    <defs>
      <clipPath id='acccc8cc32b925803e2ab8c5506018ba__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksJohnsonAndJohnsonIcon);
export default ForwardRef;
