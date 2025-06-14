import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckCaptionFillIcon = (
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
      <path d='M.25 5c0-.82.656-1.5 1.5-1.5h6c.82 0 1.5.68 1.5 1.5v3.164a4.13 4.13 0 0 0-3 3.961A4.15 4.15 0 0 0 7.96 15.5H1.75A1.48 1.48 0 0 1 .25 14zm1.5 1.875c0 .21.164.375.375.375h5.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-5.25a.385.385 0 0 0-.375.375m.375 1.875a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm0 2.25a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zM7 12.125c0-1.195.633-2.297 1.688-2.906a3.34 3.34 0 0 1 3.374 0c1.032.61 1.688 1.71 1.688 2.906 0 1.219-.656 2.32-1.687 2.93a3.34 3.34 0 0 1-3.376 0A3.36 3.36 0 0 1 7 12.125m4.406-1.008L10 12.547l-.68-.68a.397.397 0 0 0-.539 0 .397.397 0 0 0 0 .54l.938.937c.14.14.398.14.539 0l1.687-1.688a.397.397 0 0 0 0-.539.397.397 0 0 0-.539 0' />
    </g>
    <defs>
      <clipPath id='f901bb70bd70421362ff6a1bb48433ee__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckCaptionFillIcon);
export default ForwardRef;
