import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinuxSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.39 7.14c-.027-.027-.081-.027-.081-.054 0 0 0-.027.027-.027.027-.028.082-.028.137 0 .027.027.082.054.082.082 0 .027-.055.027-.082.027s-.055-.027-.082-.027m-.6.028c-.028.027-.056 0-.056-.027-.027-.028.055-.055.082-.082.055-.028.11-.028.137 0 .027 0 .027.027.027.027 0 .027-.054.027-.109.055-.027 0-.027.027-.082.027m6.07 7.629c.3.355.41.601.41.82s-.165.383-.383.492c-.41.246-1.012.438-1.395.875-.383.465-.847.739-1.312.766-.465.055-.875-.164-1.094-.629l-.082-.164c-.574.027-1.094-.164-1.504-.137-.602.055-.984.192-1.312.192a.96.96 0 0 1-.711.547c-.438.109-.985 0-1.532-.274-.52-.273-1.148-.246-1.613-.355-.246-.028-.465-.137-.547-.328-.11-.192-.082-.465.055-.875.027-.137 0-.329-.027-.547-.028-.11-.028-.22-.028-.328 0-.137 0-.247.082-.356.11-.219.301-.328.492-.383.192-.082.356-.11.465-.218.137-.165.274-.41.465-.575-.082-.465 0-.957.164-1.449.328-1.039 1.067-2.023 1.586-2.652.438-.63.574-1.121.602-1.75.054-.875-.657-3.719 2.132-3.719 2.215.027 2.106 2.352 2.079 3.61 0 .82.437 1.367.93 1.968.41.492.956 1.203 1.257 2.024.246.683.356 1.421.11 2.16.027.027.082.027.109.054.027.028.082.055.11.082.163.165.245.383.273.63.054.218.109.41.218.519m-5.387-8.64c-.082.19-.11.41-.082.6a.9.9 0 0 1 .355.11c-.055-.328.137-.656.328-.629.246 0 .383.41.246.739-.027.054-.082.109-.11.136.192.055.302.11.356.137.22-.273.301-.71.11-1.121-.274-.574-.93-.574-1.203.027m-1.094-.329c-.52 0-.656 1.04-.246 1.422.219-.137.191-.11.164-.137-.219-.191-.192-.765.055-.765.164-.028.3.273.246.52.109-.056.191-.083.3-.11.028-.547-.246-.93-.52-.93m-.383 1.668c-.11.082-.164.191-.11.328.028.137.165.301.384.438.218.11.328.3.546.41.082.027.164.027.274.055.492.027.738-.329 1.039-.41.328-.11.547-.301.629-.493.082-.246-.055-.41-.301-.52-.3-.109-.437-.136-.602-.245-.273-.164-.52-.247-.71-.247-.383 0-.63.274-.766.383 0 .028-.219.164-.383.301m.082 9.133c.055-.574-.848-1.34-1.121-1.887l-.52-.984c-.19-.246-.382-.383-.601-.438-.219-.027-.356.055-.492.192-.137.136-.246.355-.383.492-.219.191-.274.191-.547.273a.68.68 0 0 0-.41.329c-.055.136-.055.328-.027.546.054.192.082.438.027.63v.027c-.137.355-.137.574-.082.71.219.41 1.285.165 2.105.602.848.438 1.996.465 2.051-.492m-.027-.711c1.011.71 2.242.438 3.117-.191.082-.301.164-.575.191-.793.028-.41.055-.793.11-1.094.082-.356.273-.63.601-.738.055-.575.492-.575 1.04-.356.519.246.71.438.628.711h.11c.136-.465-.383-.766-.848-.957a1.9 1.9 0 0 0 0-.957c-.164-.711-.629-1.312-.957-1.613-.082 0-.055.054.055.164.328.3 1.011 1.34.656 2.324-.11-.027-.219-.027-.3-.027-.165-.793-.493-1.45-.657-1.778-.3-.574-.793-1.777-1.012-2.625a1.1 1.1 0 0 1-.601.41c-.137.055-.274.165-.438.247-.383.218-.82.246-1.176-.028-.11-.082-.218-.191-.328-.273a1 1 0 0 1-.164-.11c-.055 1.04-.766 2.325-1.094 3.09a5 5 0 0 0-.382 1.668c-.575-.793-.137-1.805.082-2.242.273-.492.3-.629.246-.574-.246.383-.602.984-.739 1.613-.082.328-.109.656 0 .957.082.3.301.602.657.82 0 0 .683.383 1.066.903.191.273.246.492.191.683-.054.164-.246.22-.464.22.136.163.3.355.41.546m7.027-.3c.027-.165-.082-.356-.355-.684-.274-.301-.22-.903-.493-1.149-.164-.164-.355-.137-.601-.137-.219.247-.711.547-1.066.465-.301-.082-.493-.465-.493-.82-.027 0-.027 0-.027.027-.191.082-.3.274-.383.575-.082.273-.082.628-.11 1.039-.027.328-.163.738-.273 1.12-.109.356-.164.684-.027.985.191.41.52.574.902.547.41-.055.848-.273 1.204-.711.601-.738 1.695-.82 1.722-1.258M5.105 7.823c-.109-.082-.082-.164-.054-.164.082 0 .082.082.11.137.054.027.136.11.218.164.164.137.41.273.684.273.273 0 .628-.164.82-.273.11-.055.246-.191.383-.274.082-.054.082-.136.164-.136s.027.082-.082.191c-.11.082-.274.192-.41.274-.247.136-.547.3-.875.3-.301 0-.575-.164-.739-.3-.082-.055-.164-.137-.219-.192' />
    </g>
    <defs>
      <clipPath id='3d17a0c64e07ace6a1f58c89401622a4__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinuxSmIcon);
export default ForwardRef;
