import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.75 7.25A.77.77 0 0 0 10 6.5H7.234a2.27 2.27 0 0 1-1.593-.656l-.61-.61.516-.539-.516.54A.76.76 0 0 0 4.492 5H1.75a.755.755 0 0 0-.75.75v6.727l1.195-3A1.11 1.11 0 0 1 3.25 8.75h9.375a1.1 1.1 0 0 1 .914.516c.211.304.258.68.117 1.03l-1.5 3.75a1.085 1.085 0 0 1-1.031.704H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h2.742c.399 0 .774.164 1.055.445l.633.633c.28.281.656.422 1.054.422H10c.82 0 1.5.68 1.5 1.5V8h-.75zM9.25 14h1.875c.14 0 .281-.094.328-.234l1.5-3.75a.38.38 0 0 0-.023-.352.4.4 0 0 0-.305-.164H3.25a.35.35 0 0 0-.352.258l-1.5 3.75a.33.33 0 0 0 .024.328c.07.117.187.164.328.164z' />
    </g>
    <defs>
      <clipPath id='e07a305dcdc4dd5669808a31c87d4482__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenCaptionRegularIcon);
export default ForwardRef;
