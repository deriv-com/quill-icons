import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.535 8.316c.11.246.027.493-.164.684l-1.176 1.066c.028.22.028.465.028.684 0 .246 0 .492-.028.71l1.176 1.067a.59.59 0 0 1 .164.684c-.11.328-.246.629-.41.93l-.137.218c-.191.301-.383.602-.601.848-.164.219-.438.273-.684.191l-1.504-.464a7.5 7.5 0 0 1-1.203.683l-.355 1.559a.65.65 0 0 1-.493.492 8.2 8.2 0 0 1-2.324 0 .65.65 0 0 1-.492-.492l-.355-1.559a6.5 6.5 0 0 1-1.204-.683l-1.503.464c-.247.082-.52.028-.684-.164a10 10 0 0 1-.602-.875l-.136-.218c-.164-.301-.301-.602-.41-.93-.11-.246-.028-.492.164-.684l1.175-1.066c-.027-.219-.027-.465-.027-.711 0-.219 0-.465.027-.684L.602 9C.41 8.809.328 8.563.438 8.316c.109-.328.246-.629.41-.93l.136-.218c.192-.3.383-.602.602-.875.164-.191.437-.246.684-.164l1.503.465c.383-.274.793-.52 1.204-.684l.355-1.558a.65.65 0 0 1 .492-.493C6.207 3.805 6.59 3.75 7 3.75c.383 0 .766.055 1.148.11.247.027.438.245.493.492l.355 1.558c.438.164.82.41 1.203.684l1.504-.465c.246-.082.52-.027.684.164.218.273.41.574.601.875l.137.219c.164.3.3.601.438.93zM7 12.937c.766 0 1.477-.41 1.887-1.093.383-.656.383-1.504 0-2.188C8.477 9 7.766 8.562 7 8.562c-.793 0-1.504.438-1.914 1.094-.383.684-.383 1.531 0 2.188A2.22 2.22 0 0 0 7 12.938' />
    </g>
    <defs>
      <clipPath id='6ae4faa1b54ac6f32fbd98c4c1460eba__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearSmFillIcon);
export default ForwardRef;
