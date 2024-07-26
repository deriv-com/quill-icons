import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 4.25c.398 0 .75.352.75.773V14c0 .422-.352.75-.75.75H.977A.736.736 0 0 1 .25 14V5.023c0-.421.328-.773.727-.773zm-6.586 9V8.258H1.867v4.992zm-.773-5.695a.89.89 0 0 0 .89-.89c0-.493-.398-.915-.89-.915a.915.915 0 0 0-.914.914c0 .492.398.89.914.89M9.25 13.25v-2.742c0-1.336-.305-2.39-1.875-2.39-.75 0-1.266.421-1.477.82h-.023v-.68H4.398v4.992h1.547v-2.46c0-.657.117-1.29.938-1.29.797 0 .797.75.797 1.313v2.437z' />
    </g>
    <defs>
      <clipPath id='13e00f9f40d72288b71b9f8e561d1d77__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinCaptionIcon);
export default ForwardRef;
