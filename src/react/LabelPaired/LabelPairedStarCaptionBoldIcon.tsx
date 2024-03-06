import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarCaptionBoldIcon = (
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
      <path d='M7 3.5a.6.6 0 0 1 .516.328l1.593 3.305 3.586.515q.351.07.47.399a.54.54 0 0 1-.142.562l-2.601 2.579.61 3.656q.045.328-.235.562a.53.53 0 0 1-.586.024L7 13.719l-3.21 1.71a.51.51 0 0 1-.587-.046q-.28-.21-.234-.54l.61-3.655L.976 8.609a.54.54 0 0 1-.141-.562.59.59 0 0 1 .469-.399l3.586-.515 1.593-3.305A.6.6 0 0 1 7 3.5m0 1.852-1.242 2.53a.57.57 0 0 1-.422.329l-2.766.398 2.016 1.993q.188.21.164.492l-.492 2.812 2.484-1.312a.51.51 0 0 1 .516 0l2.46 1.312-.468-2.812a.54.54 0 0 1 .164-.492l2.016-1.993-2.766-.398a.57.57 0 0 1-.422-.328z' />
    </g>
    <defs>
      <clipPath id='837a3be3a72f07454bf4c49c3cb97f5c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionBoldIcon);
export default ForwardRef;
