import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 16.93c0-2.078 1.395-3.801 3.309-4.293.246-.055.437.11.492.328l.984 4.02.93-3.391-.52-.848c-.164-.3.028-.684.383-.684h1.067c.355 0 .546.383.382.684l-.52.848.93 3.39.985-4.02a.42.42 0 0 1 .465-.327c-.11.383-.137.765-.137 1.175 0 1.641.793 3.09 2.023 3.938H1.07a.806.806 0 0 1-.82-.82m2.625-9.68c0-1.23.656-2.406 1.75-3.008a3.48 3.48 0 0 1 3.5 0 3.49 3.49 0 0 1 1.75 3.008 3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0 3.48 3.48 0 0 1-1.75-3.035m7 6.563c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m2.406-.739c.028.438.301.711.574.848.247.137.547.219.793.273 0 .028.028.028.055.028.274.082.492.136.629.218.11.082.137.11.137.164s-.028.11-.028.11l-.109.11a1.5 1.5 0 0 1-.52.081c-.246 0-.492-.082-.82-.191-.055 0-.11-.027-.164-.027-.219-.083-.465.054-.547.273-.054.246.055.492.301.547.027.027.082.027.137.055.191.054.41.136.656.164v.328c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437v-.301q.246-.04.492-.164c.328-.192.602-.52.602-1.012-.028-.437-.301-.71-.574-.875-.247-.164-.575-.246-.82-.328h-.028c-.274-.082-.492-.137-.656-.219-.11-.082-.11-.11-.11-.136v-.082c.028-.028.055-.055.137-.11.137-.055.328-.11.492-.11.246 0 .465.055.738.11.22.082.465-.082.52-.3.055-.247-.082-.493-.328-.548-.137-.027-.3-.054-.465-.082v-.273a.45.45 0 0 0-.437-.437.43.43 0 0 0-.438.437v.273a1.3 1.3 0 0 0-.492.165c-.328.164-.63.492-.602 1.011' />
    </g>
    <defs>
      <clipPath id='7d0be94b609ddb79d46d1a3995c83fa5__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarSmFillIcon);
export default ForwardRef;
