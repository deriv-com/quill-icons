import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayLgFillIcon = (
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
      <path d='m2.852 7.023 11.25 6.875q.858.587.898 1.602-.039 1.055-.898 1.602l-11.25 6.875q-.937.546-1.875.039-.938-.547-.977-1.641V8.625q.04-1.094.977-1.64.938-.509 1.875.038' />
    </g>
    <defs>
      <clipPath id='3ac1703476a9ec26907245d76acfbc93__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayLgFillIcon);
export default ForwardRef;
