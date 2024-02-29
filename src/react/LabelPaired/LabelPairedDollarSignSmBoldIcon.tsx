import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.156 4.406v1.34q1.149.137 1.969.356.575.19.465.793-.192.573-.766.492-.656-.165-1.504-.301a8 8 0 0 0-1.613-.055q-.793.055-1.258.356-.41.246-.547.82-.081.465.055.684.11.218.465.464.82.438 2.242.766h.055q.656.165 1.312.383a5 5 0 0 1 1.23.52q.602.355.958 1.011.328.657.164 1.504-.355 1.449-1.75 1.914a4.4 4.4 0 0 1-1.477.3v1.34q-.054.602-.656.657-.602-.055-.656-.656v-1.367h-.137a.3.3 0 0 0-.137-.028 13 13 0 0 1-1.285-.273 9 9 0 0 1-1.34-.438q-.519-.274-.328-.847.3-.547.875-.356.465.22 1.121.383.656.164 1.149.246 1.476.192 2.379-.164.848-.356.957-.957.081-.465-.055-.684-.11-.219-.465-.464-.82-.438-2.242-.766H4.28q-.656-.165-1.312-.383a5 5 0 0 1-1.23-.52A2.56 2.56 0 0 1 .78 9.466Q.453 8.808.617 7.96q.246-1.148 1.149-1.695a4.05 4.05 0 0 1 1.832-.547h.246V4.406q.054-.601.656-.656.602.054.656.656' />
    </g>
    <defs>
      <clipPath id='daa0dcb5c61bc85c5c6bcb25080deb1e__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignSmBoldIcon);
export default ForwardRef;
