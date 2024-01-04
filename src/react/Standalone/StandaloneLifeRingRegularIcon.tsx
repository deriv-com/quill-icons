import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLifeRingRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='m21.742 23.102-3.555-3.555c-.625.443-1.354.677-2.187.703-.833-.026-1.563-.26-2.188-.703l-3.554 3.555c1.588 1.38 3.502 2.096 5.742 2.148 2.24-.052 4.154-.768 5.742-2.148Zm.86-.86c1.38-1.588 2.096-3.502 2.148-5.742-.052-2.24-.768-4.154-2.148-5.742l-3.555 3.555c.443.624.677 1.354.703 2.187-.026.833-.26 1.563-.703 2.188l3.555 3.554Zm.898.86.43.468c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-.468-.43c-1.797 1.615-3.998 2.448-6.602 2.5-2.604-.052-4.805-.885-6.602-2.5l-.468.43c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l.43-.468C6.885 21.279 6.052 19.078 6 16.5c.052-2.578.885-4.779 2.5-6.602l-.43-.468c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l.468.43C11.221 7.385 13.422 6.552 16 6.5c2.578.052 4.779.885 6.602 2.5l.468-.43c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-.43.468c1.615 1.797 2.448 3.998 2.5 6.602-.052 2.604-.885 4.805-2.5 6.602ZM21.742 9.898C20.154 8.518 18.24 7.802 16 7.75c-2.24.052-4.154.768-5.742 2.148l3.555 3.555c.624-.443 1.354-.677 2.187-.703.833.026 1.563.26 2.188.703l3.554-3.555Zm-8.789 8.79c-.443-.625-.677-1.355-.703-2.188.026-.833.26-1.563.703-2.188l-3.555-3.554C8.018 12.346 7.302 14.26 7.25 16.5c.052 2.24.768 4.154 2.148 5.742l3.555-3.555ZM13.5 16.5c.026.938.443 1.654 1.25 2.148.833.47 1.667.47 2.5 0 .807-.494 1.224-1.21 1.25-2.148-.026-.938-.443-1.654-1.25-2.148-.833-.47-1.667-.47-2.5 0-.807.494-1.224 1.21-1.25 2.148Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLifeRingRegularIcon);
export default ForwardRef;
