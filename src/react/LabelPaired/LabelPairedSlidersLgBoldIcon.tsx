import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 21.75c0-.508.39-.937.938-.937h2.304c.39-1.25 1.602-2.188 3.008-2.188 1.367 0 2.578.938 2.969 2.188h9.844a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938H9.219a3.11 3.11 0 0 1-2.969 2.187c-1.406 0-2.617-.898-3.008-2.187H.938c-.547 0-.938-.391-.938-.938m5 0c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25m7.5-6.25c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25m1.25-3.125c1.367 0 2.578.938 2.969 2.188h2.343A.95.95 0 0 1 20 15.5c0 .547-.43.938-.937.938h-2.344a3.11 3.11 0 0 1-2.969 2.187c-1.406 0-2.617-.898-3.008-2.187H.938C.39 16.438 0 16.047 0 15.5c0-.508.39-.937.938-.937h9.804c.39-1.25 1.602-2.188 3.008-2.188M7.5 10.5c.664 0 1.25-.547 1.25-1.25C8.75 8.586 8.164 8 7.5 8c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m2.969-2.187h8.594A.95.95 0 0 1 20 9.25c0 .547-.43.938-.937.938h-8.594A3.11 3.11 0 0 1 7.5 12.375c-1.406 0-2.617-.898-3.008-2.187H.938C.39 10.188 0 9.797 0 9.25c0-.508.39-.937.938-.937h3.554c.39-1.25 1.602-2.188 3.008-2.188 1.367 0 2.578.938 2.969 2.188' />
    </g>
    <defs>
      <clipPath id='c8d04b80cf0f94cef7bf3e0fc875a992__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersLgBoldIcon);
export default ForwardRef;
