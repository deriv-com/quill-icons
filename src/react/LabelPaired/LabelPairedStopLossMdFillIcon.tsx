import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.594 16.469a5 5 0 0 1-1.438-1.094L2.844 15l1.906-1.906.344.375c.468.562 1.031.812 1.718.812.407 0 .594-.094.688-.156.094-.094.125-.187.125-.344s-.031-.219-.062-.281c-.032 0-.032-.031-.094-.062a1.2 1.2 0 0 0-.375-.063l-.813-.125c-.968-.125-1.75-.406-2.25-.937H4c-.5-.563-.719-1.25-.719-2.063 0-.437.063-.844.25-1.219.188-.375.438-.719.75-1 .313-.25.719-.469 1.157-.594.437-.156.937-.218 1.468-.218.688 0 1.313.093 1.875.343.531.22 1 .563 1.406 1l.313.344-1.906 1.938-.375-.406A2.7 2.7 0 0 0 7.656 10h-.031a1.7 1.7 0 0 0-.812-.187c-.375 0-.563.093-.625.124-.063.063-.094.094-.094.22 0 .093.031.155.031.187 0 .031.031.031.031.031.063.063.219.125.532.188l.812.124c.906.126 1.688.438 2.188.938.53.5.78 1.219.78 2.031 0 .469-.093.906-.25 1.313-.187.406-.437.75-.78 1.031-.313.281-.72.5-1.188.656-.469.157-1 .219-1.531.219-.813 0-1.5-.125-2.094-.406zm6.375.281V7.375h2.844v6.75H17v2.625z' />
    </g>
    <defs>
      <clipPath id='760d291a4fcf31578684d1ad3455ef39__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossMdFillIcon);
export default ForwardRef;
