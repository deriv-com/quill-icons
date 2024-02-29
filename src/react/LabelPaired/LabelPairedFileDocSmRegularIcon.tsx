import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 16.875h.875v.875H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93v3.39h-.875V9H6.563a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626h-3.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246m7.875-8.75a.7.7 0 0 0-.137-.191L6.316 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437zm-4.812 5.25h.875q.546.027.93.383.355.383.382.93v1.75a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382h-.875q-.41-.027-.437-.437v-3.5q.027-.411.438-.438m.437 3.5h.438q.41-.027.437-.437v-1.75q-.027-.411-.437-.438H5.25zm7.219-3.5h.437q.465 0 .766.328.328.3.328.766v.219q-.027.41-.437.437-.411-.027-.438-.437v-.22q-.027-.19-.219-.218h-.437q-.191.027-.219.219v2.187q.027.191.219.219h.437q.191-.027.219-.219v-.218q.027-.411.438-.438.41.027.437.438v.218q0 .465-.328.766a1 1 0 0 1-.766.328h-.437a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766V14.47q0-.465.328-.766a1 1 0 0 1 .766-.328m-4.594 1.094q0-.465.328-.766a1 1 0 0 1 .766-.328h.437q.465 0 .766.328.328.3.328.766v2.187q0 .465-.328.766a1 1 0 0 1-.766.328H8.97a1 1 0 0 1-.766-.328 1 1 0 0 1-.328-.766zm1.094-.219q-.191.027-.219.219v2.187q.027.191.219.219h.437q.191-.027.219-.219V14.47q-.027-.191-.219-.219z' />
    </g>
    <defs>
      <clipPath id='2b1ca22a66c921e303a7cb7102cc84eb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocSmRegularIcon);
export default ForwardRef;
