import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightSmBoldIcon = (
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
      <path d='M7.656 4.406v1.75q-.054.601-.656.657-.602-.056-.656-.657v-1.75q.054-.601.656-.656.602.054.656.656M11.95 6.73l-1.23 1.23q-.465.384-.93 0-.383-.464 0-.929l1.23-1.23q.465-.383.93 0 .383.465 0 .93M2.98 5.8l1.23 1.231q.384.465 0 .93-.464.382-.929 0l-1.23-1.23q-.383-.465 0-.93.465-.383.93 0M.656 10.095h1.75q.602.054.656.656-.054.602-.656.656H.656Q.055 11.352 0 10.75q.054-.602.656-.656m10.938 0h1.75q.601.054.656.656-.055.602-.656.656h-1.75q-.602-.054-.656-.656.054-.602.656-.656M4.21 14.469l-1.23 1.23q-.465.383-.93 0-.383-.465 0-.93l1.23-1.23q.465-.382.93 0 .382.465 0 .93m6.508-.93 1.23 1.23q.383.465 0 .93-.465.383-.93 0l-1.23-1.23q-.383-.465 0-.93.465-.382.93 0m-3.063 1.805v1.75q-.054.601-.656.656-.602-.055-.656-.656v-1.75q.054-.602.656-.656.602.054.656.656M8.75 10.75q-.027-.985-.875-1.504-.875-.492-1.75 0-.848.52-.875 1.504.027.985.875 1.504.875.492 1.75 0 .848-.52.875-1.504m-4.812 0q0-.82.41-1.531a3 3 0 0 1 1.12-1.121q.712-.41 1.532-.41t1.531.41 1.121 1.12q.41.712.41 1.532t-.41 1.531a3 3 0 0 1-1.12 1.121q-.712.41-1.532.41a3 3 0 0 1-1.531-.41 3 3 0 0 1-1.121-1.12 3 3 0 0 1-.41-1.532' />
    </g>
    <defs>
      <clipPath id='ee6c547a2b16336c009fdff58b5b3381__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightSmBoldIcon);
export default ForwardRef;
