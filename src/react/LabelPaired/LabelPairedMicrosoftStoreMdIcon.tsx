import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrosoftStoreMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={19}
    height={24}
    viewBox='0 0 19 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.36 8V6.219c0-1.094.562-1.438 1.624-1.688 1.594-.375 1.688.657 1.688 1.313v1.5l.406-.063V5.875c0-1.25-.406-2.156-2.156-1.75-.969.188-1.938.438-1.938 2.063v1.906zm4.093-2.469c-.031-.156-.062-.281-.062-.406 1.218-.156 1.437.188 1.437 1.563v.25L11.453 7v-.375c0-.844 0-1.25-1-1.094M8.11 7.063c0-1.25.5-1.438 1.125-1.657.032.125.063.25.063.407-.563.25-.781.406-.781 1.25v.53l-.407.063zM3.047 9.156 13.766 7l2.156.781v10.5l-2.156.782-10.72-2.125zM5.359 15l2.375.313V13.03H5.36zm0-2.281h2.375v-2.156l-2.375.343zm2.688 2.625 3 .437v-2.75h-3zm0-2.625h3v-2.594l-3 .438z' />
    </g>
    <defs>
      <clipPath id='d87f5d751d03fd1e__a'>
        <path d='M0 0h19v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftStoreMdIcon);
export default ForwardRef;
