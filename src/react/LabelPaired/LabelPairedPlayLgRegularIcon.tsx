import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.188 8.078a.66.66 0 0 0-.626 0 .61.61 0 0 0-.312.547v13.75q0 .352.313.547a.66.66 0 0 0 .625 0l11.25-6.875a.61.61 0 0 0 .312-.547.61.61 0 0 0-.312-.547zM.976 6.984q.938-.507 1.875.04l11.25 6.874q.858.547.898 1.602-.039 1.055-.898 1.602l-11.25 6.875q-.937.546-1.875.039-.938-.547-.977-1.641V8.625q.04-1.094.977-1.64' />
    </g>
    <defs>
      <clipPath id='d291e0d840f1b1b569a8d9480ac9fe47__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayLgRegularIcon);
export default ForwardRef;
