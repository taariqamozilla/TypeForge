import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './components/ui/select'

export default function AppSidebar() {
    return(
        <>
            <Sidebar>
                <SidebarHeader />
                <SidebarContent className="px-4">
                    <SidebarGroup/>
                        <Select>
                            <SelectTrigger className='w-full'>
                                <SelectValue className="w-50" placeholder="Scale"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1.067">1.067 – Minor Second</SelectItem>
                                <SelectItem value="1.125">1.125 – Major Second</SelectItem>
                                <SelectItem value="1.200">1.200 – Minor Third</SelectItem>
                                <SelectItem value="1.250">1.250 – Major Third</SelectItem>
                                <SelectItem value="1.333">1.333 – Perfect Fourth</SelectItem>
                                <SelectItem value="1.414">1.414 – Augmented Fourth</SelectItem>
                                <SelectItem value="1.500">1.500 – Perfect Fifth</SelectItem>
                                <SelectItem value="1.618">1.618 – Golden Ratio</SelectItem>
                            </SelectContent>
                        </Select>
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </>
    )
}

