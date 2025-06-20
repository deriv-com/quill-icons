import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlaySmFillIcon = (
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
      <path d='M12.387 4.652 8.94 8.098l-.027.027H6.371l3.5-3.473.027-.027h2.352c.055 0 .082.027.137.027m-1.64 3.473 2.87-2.844c.219.301.383.684.383 1.094v1.75zm-5.25-3.5h2.542L4.566 8.098l-.027.027H1.996l3.5-3.473.027-.027zm-1.833 0L.191 8.098l-.027.027H0v-1.75c0-.957.766-1.75 1.75-1.75zM0 9h14v6.125c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75zm5.906 1.805a.47.47 0 0 0-.218.383v3.5c0 .164.082.328.218.41.137.054.328.054.438-.028l2.625-1.75a.44.44 0 0 0 .219-.383.43.43 0 0 0-.22-.355l-2.624-1.75c-.11-.082-.301-.082-.438-.027' />
    </g>
    <defs>
      <clipPath id='c61c895fb14217bde0af49700a6f0596__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlaySmFillIcon);
export default ForwardRef;
