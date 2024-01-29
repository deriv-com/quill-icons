import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneYoutubeIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M26.734 11.344q.195.898.313 2.07.078 1.211.117 2.149v1.914a86 86 0 0 1-.117 2.109q-.117 1.21-.313 2.11-.468 1.445-1.914 1.874-.937.195-2.89.313-1.953.078-3.633.117h-3.594q-1.68-.039-3.633-.117-1.953-.117-2.89-.313-1.446-.429-1.914-1.875a18 18 0 0 1-.313-2.11 86 86 0 0 1-.117-2.108v-1.914q.039-.939.117-2.149.117-1.171.313-2.07.468-1.446 1.914-1.914.937-.195 2.89-.313Q13.023 9.04 14.703 9h3.594q1.68.039 3.633.117 1.953.117 2.89.313 1.446.468 1.914 1.914m-12.422 8.36 5.586-3.204-5.585-3.164z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneYoutubeIcon);
export default ForwardRef;
