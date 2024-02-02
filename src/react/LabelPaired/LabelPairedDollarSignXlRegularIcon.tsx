import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 6.75v2.297q2.297.234 3.938.656.655.234.562.938-.235.656-.937.515a33 33 0 0 0-2.72-.515A14.7 14.7 0 0 0 6 10.5q-1.5.141-2.484.75-.89.563-1.22 1.875-.14 1.032.142 1.594.327.562 1.03 1.078 1.641.89 4.22 1.453l.093.047q1.22.28 2.39.656 1.22.422 2.157.985a4.15 4.15 0 0 1 1.594 1.687q.516 1.079.234 2.531-.563 2.391-2.906 3.282-1.359.468-3 .515v2.297q-.047.704-.75.75-.655-.046-.75-.75v-2.344q-.422 0-.89-.093a22 22 0 0 1-2.204-.47 15 15 0 0 1-2.437-.796q-.61-.328-.422-.985.375-.609.984-.421 1.125.468 2.25.797 1.172.281 2.063.421 2.765.375 4.594-.328 1.734-.702 2.015-2.156.14-1.031-.14-1.594-.282-.609-1.032-1.078-1.64-.891-4.219-1.5H7.22A26 26 0 0 1 4.829 18a9.7 9.7 0 0 1-2.157-.984 3.9 3.9 0 0 1-1.547-1.641Q.562 14.25.844 12.844q.422-1.97 1.875-2.86Q4.125 9.141 5.859 9h.891V6.75q.046-.703.75-.75.703.046.75.75' />
    </g>
    <defs>
      <clipPath id='c546854b83f0d3c3__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignXlRegularIcon);
export default ForwardRef;
