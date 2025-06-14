import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={29}
    height={36}
    viewBox='0 0 29 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.586 27.797V8.109a.72.72 0 0 1 .703-.703.69.69 0 0 1 .703.703v19.172c0 .75.61 1.313 1.36 1.313h16.312a.72.72 0 0 1 .703.703.69.69 0 0 1-.703.703H6.79c-1.219 0-2.203-.937-2.203-2.203M24.18 16.078a.844.844 0 0 0-1.032 0l-7.265 7.313-1.828-1.828c-.563-.563-1.453-.563-1.97 0l-3.046 3a.736.736 0 0 0 0 1.03.68.68 0 0 0 .984 0l3.047-3.046 1.828 1.828c.563.563 1.454.563 1.97 0l7.312-7.266a.736.736 0 0 0 0-1.03m-7.782-4.828c0-.516-.468-.984-1.03-.984s-1.032.468-1.032.984c0 .563.469.984 1.031.984.563 0 1.031-.421 1.031-.984m.797-.984-2.11 5.625h1.548l2.062-5.625zm-6.937 0v1.265h2.203v4.36h1.36v-5.625z' />
    </g>
    <defs>
      <clipPath id='e12d191a847baa5c6df8f16dbc928c98__a'>
        <path d='M0 0h29v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewXlRegularIcon);
export default ForwardRef;
