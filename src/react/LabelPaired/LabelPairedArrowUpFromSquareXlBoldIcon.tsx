import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.797 6.328 18 11.578c.469.469.469 1.172 0 1.594-.422.469-1.125.469-1.594 0l-3.328-3.328v11.531c0 .656-.469 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125V9.844L7.5 13.172a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l5.25-5.25c.422-.422 1.125-.422 1.594 0M3.375 7.5h.375c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 3.75 9.75h-.375a1.11 1.11 0 0 0-1.125 1.125v15.75c0 .656.469 1.125 1.125 1.125h17.25a1.11 1.11 0 0 0 1.125-1.125v-15.75a1.14 1.14 0 0 0-1.125-1.125h-.375c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h.375C22.453 7.5 24 9.047 24 10.875v15.75C24 28.5 22.453 30 20.625 30H3.375A3.36 3.36 0 0 1 0 26.625v-15.75C0 9.047 1.5 7.5 3.375 7.5' />
    </g>
    <defs>
      <clipPath id='9dcd0444edf1c28b65ee1d6b25257dbc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareXlBoldIcon);
export default ForwardRef;
