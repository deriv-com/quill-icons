import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.492 4.273C14.016 5.516 15 7.391 15 9.5c0 2.133-.984 4.008-2.508 5.25a.584.584 0 0 1-.797-.07.58.58 0 0 1 .094-.797 5.621 5.621 0 0 0 0-8.742.58.58 0 0 1-.094-.797.584.584 0 0 1 .797-.07m-1.406 1.735v.023a4.47 4.47 0 0 1 1.664 3.492c0 1.407-.656 2.649-1.664 3.493a.58.58 0 0 1-.797-.094.584.584 0 0 1 .07-.797A3.31 3.31 0 0 0 11.625 9.5a3.3 3.3 0 0 0-1.266-2.602c-.234-.21-.28-.562-.07-.796a.58.58 0 0 1 .797-.094m-1.43 1.758c.516.422.844 1.03.844 1.734 0 .727-.328 1.336-.844 1.758a.584.584 0 0 1-.797-.07.58.58 0 0 1 .094-.797c.258-.211.422-.54.422-.891 0-.352-.164-.656-.422-.867a.58.58 0 0 1-.094-.797.584.584 0 0 1 .797-.07m-5.93.468a.52.52 0 0 1-.351.141H1.313a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188h2.062c.117 0 .258.07.352.164l2.648 2.32V5.914zm3.07-3.984a.72.72 0 0 1 .704.703v9.117c0 .375-.328.68-.703.68-.188 0-.352-.047-.469-.164L3.141 11.75H1.313A1.31 1.31 0 0 1 0 10.438V8.562C0 7.86.586 7.25 1.313 7.25H3.14l3.187-2.812a.65.65 0 0 1 .469-.188' />
    </g>
    <defs>
      <clipPath id='bd3e8142f15e3dda6a5901cbef9c2894__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighCaptionBoldIcon);
export default ForwardRef;
