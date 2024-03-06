import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineCaptionRegularIcon = (
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
      <path d='M10.75 4.625V8h.75q.352.023.375.375-.023.352-.375.375H9.25q-.352-.023-.375-.375.023-.352.375-.375H10V5.14l-.633.212q-.328.093-.469-.235-.07-.328.235-.469l1.125-.375a.4.4 0 0 1 .328.047q.164.117.164.305M4.258 14.633q-.258.234-.516 0l-2.25-2.25q-.234-.258 0-.516.258-.234.516 0l1.617 1.594V4.625q.023-.352.375-.375.352.023.375.375v8.836l1.617-1.594q.258-.234.516 0 .234.258 0 .516zm6.023-4.383q-.68.024-1.054.61a1.21 1.21 0 0 0 0 1.218q.375.585 1.054.61.68-.025 1.055-.61a1.21 1.21 0 0 0 0-1.219q-.375-.585-1.055-.609m-1.969 1.219q.024-.844.586-1.383.54-.562 1.383-.586.845.023 1.383.586.562.54.586 1.383v.094q0 .772-.492 1.359l-1.477 1.687q-.258.258-.515.047-.258-.258-.047-.515l.586-.703h-.024q-.843-.024-1.383-.586-.562-.54-.585-1.383' />
    </g>
    <defs>
      <clipPath id='743d0c42b3407530e6a55c8d48c1d672__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineCaptionRegularIcon);
export default ForwardRef;
