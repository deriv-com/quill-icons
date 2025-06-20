import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateCaptionFillIcon = (
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
      <path d='M2.46 8.258c-.14.398-.585.61-.96.469a.75.75 0 0 1-.469-.961 5.3 5.3 0 0 1 1.242-1.97 5.277 5.277 0 0 1 7.43 0l.399.423v-.844c0-.398.351-.75.75-.75.421 0 .75.352.75.75V8a.74.74 0 0 1-.75.75H8.25A.74.74 0 0 1 7.5 8c0-.398.328-.75.75-.75h.797l-.399-.398a3.79 3.79 0 0 0-5.32 0c-.398.421-.703.89-.867 1.406M.915 10.297c.023-.024.07-.024.094-.024.047 0 .07-.023.117-.023H3.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.82l.398.422a3.79 3.79 0 0 0 5.32 0c.399-.422.704-.89.868-1.406.14-.399.586-.61.96-.47a.75.75 0 0 1 .47.962 5.5 5.5 0 0 1-1.243 1.969 5.277 5.277 0 0 1-7.43 0l-.398-.422v.82c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-2.719c0-.047 0-.07.023-.094a.67.67 0 0 1 .188-.328.67.67 0 0 1 .328-.187' />
    </g>
    <defs>
      <clipPath id='bbe6fb9cc3f750291b47cd557f1c755f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionFillIcon);
export default ForwardRef;
