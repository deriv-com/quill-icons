import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={36}
    viewBox='0 0 23 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.875 14.39 1.594-1.593-.328-.328-1.594 1.594zm13.219 4.688c.703.75.703 1.922 0 2.672l-4.266 4.219c-.703.75-1.922.75-2.625 0L3.72 17.484a1.81 1.81 0 0 1 0-2.625l4.219-4.265a1.956 1.956 0 0 1 2.671 0zM8.03 12.281a.68.68 0 0 1 0 .985l-1.687 1.687a.626.626 0 0 1-.938 0l-.375-.375-.797.797c-.468.469-.468 1.172 0 1.594l8.485 8.484c.422.422 1.125.422 1.594 0l4.218-4.219c.469-.468.469-1.172 0-1.593l-8.484-8.485c-.422-.469-1.125-.469-1.594 0l-.797.797.375.375zM19 10.687a7.7 7.7 0 0 0-1.172-.984l-.375-.281c-.515-.281-.984-.516-1.547-.703l-.515-.188-.516-.14c-.328-.094-.703-.141-1.031-.188l1.922 1.969-.516.515-2.625-2.624-.61-.657h1.407c.562.047 1.078.14 1.594.235l.609.187.563.188a7.6 7.6 0 0 1 1.64.797l.469.28c.422.329.844.657 1.219 1.079 1.828 1.828 2.765 4.219 2.765 6.61h-.75A8.6 8.6 0 0 0 19 10.687M3.766 25.923c.375.328.75.656 1.172.937l.421.282c.47.328.985.562 1.5.75l.516.187.563.14c.328.095.656.141.984.188L7 26.438l.516-.516 2.625 2.625.656.656h-.938l-.515-.047a6.2 6.2 0 0 1-1.594-.234l-.61-.14-.562-.188c-.562-.235-1.125-.469-1.64-.797l-.422-.328c-.47-.282-.891-.657-1.266-1.032C1.422 24.61.484 22.22.484 19.829h.75a8.6 8.6 0 0 0 2.532 6.094' />
    </g>
    <defs>
      <clipPath id='08bdd38b5ee885563d4a525d4235f815__a'>
        <path d='M0 0h23v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceXlRegularIcon);
export default ForwardRef;
