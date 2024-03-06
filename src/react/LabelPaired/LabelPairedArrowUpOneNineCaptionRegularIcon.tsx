import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineCaptionRegularIcon = (
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
      <path d='M10.75 4.625V8h.75q.352.023.375.375-.023.352-.375.375H9.25q-.352-.023-.375-.375.023-.352.375-.375H10V5.14l-.633.212q-.328.07-.469-.235-.07-.328.235-.469l1.125-.375q.187-.069.328.047.164.117.164.305m-6.492-.258 2.25 2.25q.234.258 0 .516-.258.234-.516 0L4.375 5.539v8.836q-.023.352-.375.375-.352-.023-.375-.375V5.539L2.008 7.133q-.258.234-.516 0-.234-.258 0-.516l2.25-2.25q.258-.234.516 0m6.023 8.32q.68-.022 1.055-.609a1.21 1.21 0 0 0 0-1.219q-.375-.585-1.055-.609-.68.024-1.054.61a1.21 1.21 0 0 0 0 1.218q.375.585 1.054.61M8.312 11.47q.024-.844.586-1.383.54-.562 1.383-.586.845.023 1.383.586.562.54.586 1.383v.094q0 .772-.492 1.359l-1.477 1.71q-.234.236-.515.024-.258-.234-.047-.515l.586-.703h-.024q-.843-.024-1.383-.586-.562-.54-.585-1.383' />
    </g>
    <defs>
      <clipPath id='6874d78de5feb49dcb76f1feba956890__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineCaptionRegularIcon);
export default ForwardRef;
