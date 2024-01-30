import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.637 12.008q.574-.055.656-.656-.082-.602-.656-.657-.601.055-.657.657.056.601.657.656m-7.274 0q.601-.055.657-.656-.056-.602-.657-.657-.574.055-.656.657.082.601.656.656m7.492-3.965a7.64 7.64 0 0 1 2.762 2.57q1.066 1.587 1.258 3.637H.125q.192-2.051 1.258-3.637a7.64 7.64 0 0 1 2.762-2.57l-1.313-2.27a.3.3 0 0 1-.027-.273.27.27 0 0 1 .246-.137q.164 0 .246.137l1.34 2.324A8 8 0 0 1 8 7.086q1.75 0 3.363.738l1.34-2.324a.27.27 0 0 1 .246-.137q.165 0 .246.137a.3.3 0 0 1-.027.273z' />
    </g>
    <defs>
      <clipPath id='13facf91b6cf0ac2858098501d76ccfe__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidSmIcon);
export default ForwardRef;
