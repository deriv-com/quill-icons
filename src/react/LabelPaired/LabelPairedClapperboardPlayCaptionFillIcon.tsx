import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.617 4.273 7.664 7.227l-.023.023H5.46l3-2.977.023-.023H10.5c.047 0 .07.023.117.023M9.211 7.25l2.46-2.437c.188.257.329.585.329.937v1.5zm-4.5-3h2.18L3.914 7.227l-.023.023H1.71l3-2.977.023-.023zm-1.57 0L.164 7.227l-.023.023H0v-1.5c0-.82.656-1.5 1.5-1.5zM0 8h12v5.25c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5zm5.063 1.547a.4.4 0 0 0-.188.328v3c0 .14.07.281.188.352.117.046.28.046.375-.024l2.25-1.5a.37.37 0 0 0 .187-.328.37.37 0 0 0-.187-.305l-2.25-1.5c-.094-.07-.258-.07-.375-.023' />
    </g>
    <defs>
      <clipPath id='22baed0392633b7f8d8c6eaa4fa469db__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayCaptionFillIcon);
export default ForwardRef;
