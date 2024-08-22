import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 14.797a3.78 3.78 0 0 1 3.07-3.727c.164-.023.328.07.375.211l.774 1.617c.164-.492.328-1.007.492-1.523h-.234A.385.385 0 0 1 4.102 11c0-.187.187-.375.375-.375h1.5c.21 0 .375.188.375.375a.37.37 0 0 1-.375.375h-.211c.164.516.328 1.031.492 1.523a50 50 0 0 0 .75-1.617.39.39 0 0 1 .398-.21c.07.023.14.023.211.046-.07.305-.117.61-.117.938-.422.89-.82 1.758-1.242 2.648 0 .024-.024.047-.024.047h2.204c.234.305.492.54.796.75H.704A.69.69 0 0 1 0 14.797m.75-.047h3.492s-.023-.023-.023-.047c-.446-.937-.867-1.875-1.313-2.812A2.974 2.974 0 0 0 .75 14.75m1.5-8.25c0-1.055.563-2.062 1.5-2.578a2.99 2.99 0 0 1 3 0A3 3 0 0 1 8.25 6.5a3.03 3.03 0 0 1-1.5 2.602c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.25 6.5m1.031-1.125a2.27 2.27 0 0 0 0 2.25A2.27 2.27 0 0 0 5.25 8.75c.797 0 1.547-.422 1.945-1.125a2.27 2.27 0 0 0 0-2.25A2.28 2.28 0 0 0 5.25 4.25c-.82 0-1.547.445-1.969 1.125m1.383 8.531c.094.164.164.328.234.492a.38.38 0 0 0 .68 0c.07-.164.164-.328.234-.492-.187-.562-.375-1.148-.562-1.71zm3.586-1.781c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m.75 0a2.62 2.62 0 0 0 2.625 2.625 2.636 2.636 0 0 0 2.625-2.625c0-1.43-1.195-2.625-2.625-2.625A2.636 2.636 0 0 0 9 12.125m1.313-.633c-.024-.445.234-.726.515-.867a1.1 1.1 0 0 1 .422-.14v-.235a.37.37 0 0 1 .375-.375c.188 0 .375.164.375.375v.234c.14.024.281.047.398.07.211.048.329.258.282.47-.047.187-.258.328-.446.257-.234-.047-.421-.094-.632-.094-.141 0-.305.047-.422.094-.07.047-.094.07-.117.094v.07c0 .024 0 .047.093.117.14.07.328.118.563.188h.023c.211.07.492.14.703.281.235.14.47.375.492.75 0 .422-.234.703-.515.867a1.5 1.5 0 0 1-.422.141v.258c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.281c-.21-.024-.398-.094-.562-.141-.047-.023-.094-.023-.118-.047-.21-.047-.304-.258-.258-.469.07-.187.282-.304.47-.234.046 0 .093.023.14.023.281.094.492.165.703.165.164 0 .328-.024.445-.07l.094-.095s.024-.046.024-.093-.024-.07-.118-.14c-.117-.071-.304-.118-.539-.188-.023 0-.047 0-.047-.024a2.6 2.6 0 0 1-.68-.234.86.86 0 0 1-.492-.727' />
    </g>
    <defs>
      <clipPath id='63e8fd5f57a48ff25f96776d5cbc657a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarCaptionRegularIcon);
export default ForwardRef;
