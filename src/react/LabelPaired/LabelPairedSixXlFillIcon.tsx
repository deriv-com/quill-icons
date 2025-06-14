import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixXlFillIcon = (
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
      <path d='m10.875 9.984-3 3.563C11.813 13.734 15 17.016 15 21c0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21v-.187c.047-1.735.656-3.422 1.781-4.735l6.797-8.015c.516-.657 1.5-.704 2.11-.188.656.516.703 1.5.187 2.11M12 21c0-1.594-.89-3.047-2.25-3.89-1.406-.797-3.14-.797-4.5 0C3.844 17.952 3 19.405 3 21c0 1.64.844 3.094 2.25 3.938 1.36.796 3.094.796 4.5 0C11.11 24.094 12 22.64 12 21' />
    </g>
    <defs>
      <clipPath id='adcfca75741d44f0c2c751a515ab5255__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixXlFillIcon);
export default ForwardRef;
