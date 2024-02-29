import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.055 12.688q-.43.39-.86 0-.39-.43 0-.86a17.2 17.2 0 0 1 5.547-3.71Q8.867 6.788 12.5 6.75q3.633.04 6.758 1.367a17.2 17.2 0 0 1 5.547 3.711q.39.43 0 .86-.43.39-.86 0A16.6 16.6 0 0 0 18.79 9.25Q15.86 8.04 12.5 8q-3.36.04-6.29 1.25a16.6 16.6 0 0 0-5.155 3.438M12.5 14.25q-2.07 0-3.867.781A10 10 0 0 0 5.43 17.18q-.43.351-.86 0-.39-.469 0-.899a11.1 11.1 0 0 1 3.555-2.383q2.031-.897 4.375-.898 2.344 0 4.375.898a11.1 11.1 0 0 1 3.555 2.383q.39.43 0 .899-.43.351-.86 0a10 10 0 0 0-3.203-2.149q-1.797-.78-3.867-.781m0 6.25q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352m0 3.75q-1.406-.04-2.148-1.25-.705-1.25 0-2.5.741-1.21 2.148-1.25 1.407.04 2.148 1.25.705 1.25 0 2.5-.741 1.21-2.148 1.25' />
    </g>
    <defs>
      <clipPath id='2f011e78942d4d094f466cc7609d712c__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiLgRegularIcon);
export default ForwardRef;
