import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarCaptionRegularIcon = (
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
      <path d='M5.57 7.46a.79.79 0 0 1-.586.423l-3.21.469 2.343 2.32q.258.258.211.656l-.562 3.258 2.882-1.524a.7.7 0 0 1 .704 0l2.882 1.524-.562-3.258q-.046-.398.21-.656l2.345-2.32-3.235-.47a.77.77 0 0 1-.562-.421L7 4.484zm4.64 7.97L7 13.719l-3.21 1.71a.51.51 0 0 1-.587-.046q-.28-.21-.234-.54l.61-3.655L.976 8.609a.54.54 0 0 1-.141-.562.54.54 0 0 1 .469-.375l3.586-.54 1.593-3.304A.6.6 0 0 1 7 3.5a.6.6 0 0 1 .516.328l1.593 3.305 3.586.515q.351.07.47.399a.54.54 0 0 1-.142.562l-2.601 2.579.61 3.656q.045.328-.235.539a.51.51 0 0 1-.586.047' />
    </g>
    <defs>
      <clipPath id='cd0176ad5fe81ae80e2b4cc3511aab31__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionRegularIcon);
export default ForwardRef;
