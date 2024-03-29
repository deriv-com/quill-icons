import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageCaptionFillIcon = (
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
      <path d='M0 5.75c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5zm7.57 2.508A.53.53 0 0 0 7.125 8a.54.54 0 0 0-.469.258l-2.039 3-.633-.797a.57.57 0 0 0-.421-.211.58.58 0 0 0-.446.21l-1.5 1.876a.58.58 0 0 0-.07.61.56.56 0 0 0 .516.304h7.875c.187 0 .398-.094.492-.281a.58.58 0 0 0-.047-.586zM2.625 8c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.125-.21-.329-.562-.563-.96-.563-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.125.21.351.562.562.984.562' />
    </g>
    <defs>
      <clipPath id='78ce498d86302127cd562f73a5b91e78__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionFillIcon);
export default ForwardRef;
