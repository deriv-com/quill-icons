import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.07 5.656a.65.65 0 0 1 .82 0l10.626 9.375c.273.235.273.625.078.899-.235.273-.625.273-.899.039l-1.445-1.29v7.696a3.11 3.11 0 0 1-3.125 3.125H5.875c-1.758 0-3.125-1.367-3.125-3.125V14.68l-1.484 1.289c-.235.234-.664.234-.86-.04-.234-.273-.234-.663.04-.898zM4 13.586v8.789c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-8.79l-7.5-6.6z' />
    </g>
    <defs>
      <clipPath id='f626b0c6d28217c2fe19cf09cad62779__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankLgRegularIcon);
export default ForwardRef;
